import { useEffect, useState, useRef } from 'react';

export default function Canvas() {
  const [img, setImg] = useState(null); // Estado para almacenar la imagen cargada
  const p5Instance = useRef(null); // Referencia para almacenar la instancia de p5
  const containerRef = useRef(null); // Referencia para el contenedor

  const p5 = typeof window !== 'undefined' ? require('p5') : null; // Importación de p5.js solo del lado del cliente

  useEffect(() => {
    if (img && p5 && !p5Instance.current) {
      const sketch = (p) => {
        let canvas;

        // Función para redimensionar y escalar la imagen manteniendo la proporción
        const drawImage = () => {
          if (!canvas) return; // Asegurarse de que el canvas está listo

          const canvasContainer = containerRef.current; // Referencia al contenedor
          const maxWidth = canvasContainer.offsetWidth;
          const maxHeight = canvasContainer.offsetHeight;

          const imgAspectRatio = img.width / img.height;
          const containerAspectRatio = maxWidth / maxHeight;

          let canvasWidth, canvasHeight;

          // Escalar la imagen dentro del canvas, manteniendo la proporción
          if (containerAspectRatio > imgAspectRatio) {
            // Si el contenedor es más ancho, ajustar la altura
            canvasHeight = maxHeight;
            canvasWidth = canvasHeight * imgAspectRatio;
          } else {
            // Si el contenedor es más alto, ajustar el ancho
            canvasWidth = maxWidth;
            canvasHeight = canvasWidth / imgAspectRatio;
          }

          p.resizeCanvas(maxWidth, maxHeight); // Asegurarnos de que el canvas ocupe el contenedor
          const xOffset = (maxWidth - canvasWidth) / 2; // Centramos la imagen en el canvas
          const yOffset = (maxHeight - canvasHeight) / 2;

          p.background(255); // Limpia el fondo (evita p.clear() para mayor compatibilidad)
          p.image(img, xOffset, yOffset, canvasWidth, canvasHeight); // Dibujar la imagen escalada y centrada
        };

        p.setup = () => {
          const canvasContainer = containerRef.current;
          canvas = p.createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
          canvas.parent(canvasContainer); // Asignar el canvas al contenedor
        };

        p.draw = () => {
          if (img) {
            drawImage(); // Redibujar la imagen si es necesario
          }
        };

        p.windowResized = () => {
          drawImage(); // Redibujar la imagen cuando se cambia el tamaño de la ventana
        };
      };

      p5Instance.current = new p5(sketch);

      // Eliminar el canvas por defecto si es creado innecesariamente
      const defaultCanvas = document.getElementById('defaultCanvas0');
      if (defaultCanvas) defaultCanvas.remove();
    }

    // Limpiar event listener en el desmontaje del componente
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove(); // Limpiar instancia de p5
        p5Instance.current = null;
      }
    };
  }, [img, p5]);

  const loadImageFromInput = (fileInput) => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      if (p5) {
        const loadedImage = new p5().loadImage(e.target.result, () => setImg(loadedImage));
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      className="canvas"
      id="myapp"
      ref={containerRef}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {!img && (
        <label htmlFor="fileInput" className="custom-file-upload">
          Choose your picture
        </label>
      )}
      <input
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={(e) => loadImageFromInput(e.target)}
      />
    </section>
  );
}