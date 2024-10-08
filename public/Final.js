// Variables globales para los colores y configuraciones
let blue, red, green, img;
let originalCanvasState; // Variable para guardar el estado original del canvas

// Variables para los colores y configuraciones controladas externamente
let selectedRedColor = "red";
let selectedBlueColor = "blue";
let selectedGreenColor = "green";

let redFrecuency = 5;
let redAngle = 45;
let redIntensity = 127;
let blueFrecuency = 5;
let blueAngle = 45;
let blueIntensity = 127;
let greenFrecuency = 5;
let greenAngle = 45;
let greenIntensity = 127;

function setup() {
  noCanvas();
  pixelDensity(1);
  noLoop();
}

function draw() {
  if (img) {
    if (!blue || !red || !green) {
      blue = new Riso(selectedBlueColor);
      red = new Riso(selectedRedColor);
      green = new Riso(selectedGreenColor);
    }

    // Agrega el fondo blanco
    clear();
    background(255); // Dibuja un fondo blanco antes de cualquier otra cosa

    clearRiso();

    let blues = extractRGBChannel(img, "blue");
    let reds = extractRGBChannel(img, "red");
    let greens = extractRGBChannel(img, "green");

    let redHalftoned = halftoneImage(blues, selectedRedPattern, redFrecuency, redAngle, redIntensity);
    let blueHalftoned = halftoneImage(reds, selectedBluePattern, blueFrecuency, blueAngle, blueIntensity);
    let greenHalftoned = halftoneImage(greens, selectedGreenPattern, greenFrecuency, greenAngle, greenIntensity);

    blue.imageMode(CENTER);
    red.imageMode(CENTER);
    green.imageMode(CENTER);

    blue.image(blueHalftoned, width / 2, height / 2);
    red.image(redHalftoned, width / 2, height / 2);
    green.image(greenHalftoned, width / 2, height / 2);

    drawRiso();

    // Guarda el estado original del canvas
    originalCanvasState = get();
  }
}

// Función para restaurar el canvas a su estado original
function restoreOriginalCanvasState() {
  clear();
  background(255); // Fondo blanco
  image(originalCanvasState, 0, 0); // Restaura el contenido original del canvas
}

// Función para descargar la previsualización como JPG
function downloadAsJPG() {
  const canvas = document.querySelector('canvas'); // Selecciona el canvas en la pantalla
  if (canvas) {
    const image = canvas.toDataURL('image/jpeg', 1.0); // Convierte el contenido del canvas a formato JPG

    // Crea un enlace temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = image;
    link.download = 'generated-model.jpg'; // Nombre del archivo descargado
    link.click();
  } else {
    console.error('No se encontró ningún canvas en la página.');
  }
}

// Función para exportar un canal de color a PDF y agregarlo al ZIP
function exportLayerToPDFAndAddToZip(layer, filename, zip) {
  return new Promise((resolve, reject) => {
    // Limpia el canvas antes de dibujar la capa específica
    clear();
    background(255); // Fondo blanco para cada PDF

    // Dibuja solo la capa correspondiente
    layer.draw();

    const canvas = document.querySelector('canvas');
    if (canvas) {
      const imgData = canvas.toDataURL('image/png'); // Convierte el canvas a PNG

      // Obtén las dimensiones del canvas
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Convierte las dimensiones a milímetros (1 píxel ≈ 0.264583 mm)
      const pdfWidth = canvasWidth * 0.264583;
      const pdfHeight = canvasHeight * 0.264583;

      // Crear el PDF con las dimensiones del canvas
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait', // Orientación basada en el tamaño
        unit: 'mm',
        format: [pdfWidth, pdfHeight] // Tamaño del PDF según el tamaño del canvas
      });

      // Agregar la imagen al PDF
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Ajustar imagen al PDF

      // Generar el PDF en formato base64
      const pdfData = doc.output('datauristring');
      const base64Data = pdfData.split(',')[1];

      // Agregar el PDF al archivo ZIP
      zip.file(`${filename}.pdf`, base64Data, { base64: true });

      setTimeout(() => {
        console.log(`${filename} exportado como PDF y añadido al ZIP`);
        resolve();
      }, 100);
    } else {
      reject('No se encontró ningún canvas para exportar.');
    }
  });
}

// Función para exportar todas las capas como PDF y empaquetarlas en un ZIP
function exportLayersAsZIP() {
  const zip = new JSZip(); // Crear un nuevo archivo ZIP

  // Exporta las capas y agrégalas al ZIP usando los nombres de las tintas seleccionadas
  exportLayerToPDFAndAddToZip(blue, `${selectedBlueColor}-layer`, zip)
    .then(() => {
      restoreOriginalCanvasState(); // Restaurar el canvas original
      return exportLayerToPDFAndAddToZip(red, `${selectedRedColor}-layer`, zip);
    })
    .then(() => {
      restoreOriginalCanvasState(); // Restaurar el canvas original
      return exportLayerToPDFAndAddToZip(green, `${selectedGreenColor}-layer`, zip);
    })
    .then(() => {
      restoreOriginalCanvasState(); // Restaurar el canvas original
      console.log("Todas las capas han sido exportadas y añadidas al ZIP");

      // Generar el archivo ZIP y forzar la descarga
      zip.generateAsync({ type: "blob" }).then(function (content) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = "layers.zip"; // Nombre del archivo ZIP
        link.click();
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Función para cargar la imagen del input de archivo
function loadImageFromInput(input) {
  const file = input.files[0];
  const reader = new FileReader();
  const chooseFileButton = document.getElementById("fileButton");

  reader.onload = function (e) {
    img = loadImage(e.target.result, () => {
      const canvasContainer = document.getElementById('myapp');
      if (canvasContainer) {
        let c = createCanvas(img.width, img.height);
        c.parent('myapp');
        draw();
        input.style.display = "none";
        chooseFileButton.style.display = "none";
      } else {
        console.error('El contenedor con ID "myapp" no existe.');
      }
    });
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Agrega los listeners para los botones de descarga
window.onload = function () {
  const fileInput = document.getElementById("fileInput");
  const jpgButton = document.getElementById("downloadJPGButton");
  const pdfButton = document.getElementById("downloadPDFButton");

  fileInput.addEventListener("change", function () {
    loadImageFromInput(this);
  });

  // Listener para descargar como JPG
  jpgButton.addEventListener("click", function () {
    downloadAsJPG();
  });

  // Listener para exportar las capas como ZIP en lugar de PDFs individuales
  pdfButton.addEventListener("click", function () {
    exportLayersAsZIP(); // Exportar capas como PDFs en un archivo ZIP
  });
};