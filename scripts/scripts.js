////////////////////////////////////////////////////////////// CHANNEL BUTTONS //////////////////////////////////////////////////////////////////

const colourButtons = {
  red: document.getElementById("buttonred"),
  blue: document.getElementById("buttonblue"),
  green: document.getElementById("buttongreen"),
};

const menu = document.querySelector(".right");
const channelText = document.getElementById("channel");

function rgbArrayToString(rgbArray) {
  return `rgb(${rgbArray.join(", ")})`;
}

function calculateBrightness(color) {
  const rgbValues = color.match(/\d+/g).map(Number);
  return (rgbValues[0] * 299 + rgbValues[1] * 587 + rgbValues[2] * 114) / 1000;
}

function adjustTextColor(button) {
  const backgroundColor = window.getComputedStyle(button).backgroundColor;
  const isDark = calculateBrightness(backgroundColor) < 128;

  button.style.color = isDark ? "white" : "";
}

function createColorDivsForButton(button) {
  hideColours();

  if (!colours) {
    colours = document.createElement("div");
    colours.classList.add("coloursdiv");
    colours.style.cssText = `
      position: absolute;
      top: 0;
      left: 121px;
      width: calc(50vw - 120px);
      height: 100px;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 1px;
      background-color: black;
    `;

    createColorDivs(colorColour, (selectedColor, colorName) => changeBgButton(button, selectedColor, colorName));

    menu.appendChild(colours);
  }
}


function createColorDivs(color, changeBgButton) {
  for (let i = 0; i < 80; i++) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("colour");
    colorDiv.style.cssText = "cursor: pointer;";

    const selectedColor = rgbArrayToString(color[i]);
    colorDiv.style.backgroundColor = selectedColor;

    colorDiv.addEventListener("mouseover", () => {
      channelText.textContent = colorAlias[i];
    });

    colorDiv.addEventListener("mouseout", () => {
      channelText.textContent = 'Channels';
    });

    colorDiv.addEventListener("click", () => {
      changeBgButton(selectedColor, colorName[i]);
    });

    colours.appendChild(colorDiv);
  }
}


function changeBgButton(button, selectedColor, colorName) {
  colourButtons[button].style.backgroundColor = selectedColor;

  if (button === "red") {
    selectedRedColor = `"${colorName}"`;
    red = new Riso(colorName);
  } else if (button === "blue") {
    selectedBlueColor = `"${colorName}"`;
    blue = new Riso(colorName);
  } else if (button === "green") {
    selectedGreenColor = `"${colorName}"`;
    green = new Riso(colorName);
  }

  adjustTextColor(colourButtons[button]);

  draw();
  hideColours()
}

let colours = null;

function hideColours() {
  if (menu.style.display !== 'none') {
      Object.values(colourButtons).forEach((button) => {
          button.style.display = "grid";
      });

      if (colours && colours.parentNode) {
          colours.parentNode.removeChild(colours);
          colours = null;
      }
  }
}

Object.values(colourButtons).forEach((button) => {
  button.addEventListener("click", () => createColorDivsForButton(button.id.replace("button", "").toLowerCase()));
});


////////////////////////////////////////////////////////////// PATTERN BUTTONS //////////////////////////////////////////////////////////////////

const patternButtons = {
  red: document.getElementById("patternRed"),
  blue: document.getElementById("patternBlue"),
  green: document.getElementById("patternGreen"),
};

const elements = ["line", "circle", "square", "cross", "ellipse"];

let selectedRedPattern = "circle";
let selectedBluePattern = "circle";
let selectedGreenPattern = "circle";

function createPatternDiv(color) {
  hidePatterns();

  if (!patterns) {
    patterns = document.createElement("div");
    patterns.classList.add("patternsdiv");
    patterns.style.cssText = `
      position: absolute;
      right: -1px;
      top: 101px;
      height: 100px;
      width: calc(50vw - 120px);
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      background-color: white;
      place-items: center;
    `;

    createPatternButtons(color);

    menu.appendChild(patterns);
  }
}

function createPatternButtons(color) {
  elements.forEach((element) => {
    const elementP = document.createElement("p");
    elementP.textContent = element;
    elementP.textContent = element.charAt(0).toUpperCase() + element.slice(1);
    elementP.style.cssText = `
      cursor: pointer;
      display: grid;
      margin: 0;
      padding: 0;
      height: max-content;
      width: max-content;
      text-decoration: none;
      `;
      elementP.addEventListener("mouseover", () => {
        elementP.style.textDecoration = "underline";
      });
  
      elementP.addEventListener("mouseout", () => {
        elementP.style.textDecoration = "none";
      });

    elementP.addEventListener("click", () => {
      if (color === "red") {    
        selectedRedPattern = element;
        patternButtons.red.textContent = element.charAt(0).toUpperCase() + element.slice(1);;}
      else if (color === "blue") {    
        selectedBluePattern = element;
        patternButtons.blue.textContent = element.charAt(0).toUpperCase() + element.slice(1);;}
      else if (color === "green") {    
        selectedGreenPattern = element;
        patternButtons.green.textContent = element.charAt(0).toUpperCase() + element.slice(1);;}

      draw();
      hidePatterns(); // Ocultar los patrones después de hacer clic en un elemento
    });

    patterns.appendChild(elementP);
  });
}

let patterns = null;

function hidePatterns() {
  if (menu.style.display !== 'none') {
    Object.values(patternButtons).forEach((button) => {
      button.style.display = "grid";
    });

    if (patterns && patterns.parentNode) {
      patterns.parentNode.removeChild(patterns);
      patterns = null;
    }
  }
}

Object.values(patternButtons).forEach((button) => {
  button.addEventListener("click", () => createPatternDiv(button.id.replace("pattern", "").toLowerCase()));
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsidePatterns = patterns && patterns.contains(event.target);

  if (!isClickInsideMenu && !isClickInsidePatterns && menu.style.display !== 'none') {
    hidePatterns();
  }
});

////////////////////////////////////////////////////////////// VALUES INPUTS //////////////////////////////////////////////////////////////////

function actualizarVariables() {
  // Frecuency
  redFrecuency = parseInt(document.getElementById('frecuencyRed').value);
  blueFrecuency = parseInt(document.getElementById('frecuencyBlue').value);
  greenFrecuency = parseInt(document.getElementById('frecuencyGreen').value);

  // Angle
  redAngle = parseInt(document.getElementById('angleRed').value);
  blueAngle = parseInt(document.getElementById('angleBlue').value);
  greenAngle = parseInt(document.getElementById('angleGreen').value);

  // Intensity
  redIntensity = parseInt(document.getElementById('intensityRed').value);
  blueIntensity = parseInt(document.getElementById('intensityBlue').value);
  greenIntensity = parseInt(document.getElementById('intensityGreen').value);

  draw();
}

    function checkEnter(event, inputId) {
      // Si la tecla presionada es Enter (código 13), ejecuta actualizarVariables()
      if (event.keyCode === 13) {
        event.preventDefault(); // Evita que se procese la tecla Enter normalmente (por ejemplo, para enviar un formulario)
        actualizarVariables();

      }
    }