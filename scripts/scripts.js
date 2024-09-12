////////////////////////////////////////////////////////////// CHANNEL BUTTONS //////////////////////////////////////////////////////////////////

const colourButtons = {
  red: document.getElementById("buttonred"),
  blue: document.getElementById("buttonblue"),
  green: document.getElementById("buttongreen"),
};

const menu = document.querySelector(".menu");
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
              patternButtons.red.textContent = element.charAt(0).toUpperCase() + element.slice(1);;
          } else if (color === "blue") {
              selectedBluePattern = element;
              patternButtons.blue.textContent = element.charAt(0).toUpperCase() + element.slice(1);;
          } else if (color === "green") {
              selectedGreenPattern = element;
              patternButtons.green.textContent = element.charAt(0).toUpperCase() + element.slice(1);;
          }

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

////////////////////////////////////////////////////////////// MENU HELP GUIDE //////////////////////////////////////////////////////////////////

function changeText(newText) {
  document.getElementById("menuText").innerHTML = newText;
}

function resetText() {
  document.getElementById("menuText").innerHTML = "Welcome to John Boy Riso Lab! With this app, you can submit your own pictures, transform the RGB channels into risograph colors and download them for printing:<br><br>1. Upload your photo.<br>2. Choose from over 70 colors for the main channels.<br>3. Select a pattern for the risograph texture.<br>4. Play around with and modify the values of the textures.<br>5. Once you're satisfied, click 'Download result' to download your model, conveniently divided into layers.<br><br>Credits: P5.RISO, Dinamo Typefaces.";
}

function addHoverListeners(itemId, newText) {
  const item = document.getElementById(itemId);
  item.addEventListener('mouseover', () => changeText(newText));
  item.addEventListener('mouseout', resetText);
}

addHoverListeners('channel', 'An RGB channel is one of the three color channels within the RGB (Red, Green, Blue) color model. An RGB image comprises three distinct channels, with each aligning to one of these primary colors. <br><br>The image is generated by seamlessly merging these channels. Each channel encompasses intensity values for its specific color, and when amalgamated, they yield the complete spectrum of colors. In this particular instance, we are dividing the three color spectrums into layers.');
addHoverListeners('patternItem', 'A pattern is a repeated and recognizable design or sequence. It can refer to a regular or recurring form, arrangement, or behavior. <br><br>The Risograph printing process involves creating a stencil from a digital file and then using it to transfer ink onto paper. In this case, we convert tints to patterns for printing.');
addHoverListeners('angleItem', 'In this input, you have the option to specify your preferred angle. By doing so, you can dynamically adjust the rotation of the pattern.');
addHoverListeners('frecuencyItem', 'Here, you can input the frequency of the pattern, which determines the saturation and definition of the pattern itself.<br><br> A higher number indicates a bigger and less defined pattern, while a smaller number results in a smaller size of the pattern, enhancing readability and definition. The minimum value for this input is 1. Working with small values will affect the performance.');
addHoverListeners('intensityItem', 'In this input, you can adjust the intensity of the pattern, influencing the color saturation. A high number can signify a loss of the pattern.');
addHoverListeners('fileButton', 'You can upload your images in JPG and PNG formats. I am not using a cloud, so everything is managed locally :).<br><br> I recommend not uploading heavy images (< 1mb) for optimal performance. If you plan to print the images right after using this tool, I suggest uploading them while maintaining the printing proportions (A4/A3).');