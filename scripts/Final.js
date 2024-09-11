let blue, red, green, img;

let selectedRedColor = "red";
let selectedBlueColor = "blue";
let selectedGreenColor = "green";

function setup() {
  noCanvas();
  pixelDensity(1);
  noLoop();
}

let redFrecuency = 5;
let redAngle = 45;
let redIntensity = 127;
let blueFrecuency = 5;
let blueAngle = 45;
let blueIntensity = 127;
let greenFrecuency = 5;
let greenAngle = 45;
let greenIntensity = 127;

function draw() {
  if (img) {
    // Se ejecuta cuando la imagen está cargada

    if (!blue || !red || !green) {
      // Inicializa los objetos Riso cuando aún no se hayan inicializado
      blue = new Riso(selectedBlueColor);
      red = new Riso(selectedRedColor);
      green = new Riso(selectedGreenColor);
    }

    clear();
    background(255, 0);

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
  }
}

function exportColor(color) {
  return new Promise((resolve, reject) => {
    color.export();

    setTimeout(() => {
      console.log(`${color.name} exportado`);
      resolve();
    }, 100);
  });
}

function exportColorsSequentially() {
  exportColor(blue)
    .then(() => exportColor(red))
    .then(() => exportColor(green))
    .then(() => {
      console.log("Complete");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function loadImageFromInput(input) {
  const file = input.files[0];
  const reader = new FileReader();
  const chooseFileButton = document.getElementById("fileButton");

  reader.onload = function (e) {
    img = loadImage(e.target.result, () => {
      // Verifica que el contenedor exista
      const canvasContainer = document.getElementById('myapp');
      if (canvasContainer) {
        // Crea el canvas y establece el contenedor como su padre
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

window.onload = function () {
  const buttonResult = document.getElementById("downloadButton");
  const fileInput = document.getElementById("fileInput");

  fileInput.addEventListener("change", function () {
    loadImageFromInput(this);
  });

  buttonResult.addEventListener("click", function () {
    exportColorsSequentially();
  });
};
