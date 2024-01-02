
let blue, red, green, img;

function preload() {
  img = loadImage('./Images/TEST.jpg');
}

let selectedRedColor = "red";
let selectedBlueColor = "blue";
let selectedGreenColor = "green";

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  blue = new Riso(selectedBlueColor);
  red = new Riso(selectedRedColor);
  green = new Riso(selectedGreenColor);
  
  noLoop();
}

let redFrecuency = 5
let redAngle = 45
let redIntensity = 127
let blueFrecuency = 5
let blueAngle = 45
let blueIntensity = 127
let greenFrecuency = 5
let greenAngle = 45
let greenIntensity = 127

function draw() {
  clear();
  background(255, 0);

  clearRiso();

  let blues = extractRGBChannel(img, "blue");
  let reds = extractRGBChannel(img, "red");
  let greens = extractRGBChannel(img, "green");

  let redHalftoned = halftoneImage(blues, (selectedRedPattern), redFrecuency, redAngle, redIntensity);
  let blueHalftoned = halftoneImage(reds, (selectedBluePattern), blueFrecuency, blueAngle, blueIntensity);
  let greenHalftoned = halftoneImage(greens, (selectedGreenPattern), greenFrecuency, greenAngle, greenIntensity);

  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  green.imageMode(CENTER);

  blue.image(blueHalftoned, width / 2, height / 2);
  red.image(redHalftoned, width / 2, height / 2);
  green.image(greenHalftoned, width / 2, height / 2);

  drawRiso();

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

window.onload = function() {
  const buttonResult = document.getElementById("downloadButton");


  buttonResult.addEventListener('click', function() {
      exportColorsSequentially();
  });
}

Object.values(colourButtons).forEach((button) => {
  button.addEventListener("click", () => createColorDivsForButton(button.id.replace("button", "").toLowerCase()));
});
