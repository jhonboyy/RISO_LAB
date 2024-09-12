const RISOCOLORS = [
  {name: "BLACK", color: [0, 0, 0], alias: "Black"},
  {name: "BURGUNDY", color: [145, 78, 114], alias: "Burgundy"},
  {name: "BLUE", color: [0, 120, 191], alias: "Blue"},
  {name: "GREEN", color: [0, 169, 92], alias: "Green"},
  {name: "MEDIUMBLUE", color: [50, 85, 164], alias: "Medium blue"},
  {name: "BRIGHTRED", color: [241, 80, 96], alias: "Bright red"},
  {name: "RISOFEDERALBLUE", color: [61, 85, 136], alias: "Federal blue"},
  {name: "PURPLE", color: [118, 91, 167], alias: "Purple"},
  {name: "TEAL", color: [0, 131, 138], alias: "Teal"},
  {name: "FLATGOLD", color: [187, 139, 65], alias: "Flatgold"},
  {name: "HUNTERGREEN", color: [64, 112, 96], alias: "Huntergreen"},
  {name: "RED", color: [255, 102, 94], alias: "Red"},
  {name: "BROWN", color: [146, 95, 82], alias: "Brown"},
  {name: "YELLOW", color: [255, 232, 0], alias: "Yellow"},
  {name: "MARINERED", color: [210, 81, 94], alias: "Marinered"},
  {name: "ORANGE", color: [255, 108, 47], alias: "Orange"},
  {name: "FLUORESCENTPINK", color: [255, 72, 176], alias: "Fluor pink"},
  {name: "LIGHTGRAY", color: [136, 137, 138], alias: "Light gray"},
  {name: "METALLICGOLD", color: [172, 147, 110], alias: "Metallic gold"},
  {name: "CRIMSON", color: [228, 93, 80], alias: "Crimson"},
  {name: "FLUORESCENTORANGE", color: [255, 116, 119], alias: "Fluor orange"},
  {name: "CORNFLOWER", color: [98, 168, 229], alias: "Corn flower"},
  {name: "SKYBLUE", color: [73, 130, 207], alias: "Sky blue"},
  {name: "SEABLUE", color: [0, 116, 162], alias: "Sea blue"},
  {name: "LAKE", color: [35, 91, 168], alias: "Lake"},
  {name: "INDIGO", color: [72, 77, 122], alias: "Indigo"},
  {name: "MIDNIGHT", color: [67, 80, 96], alias: "Midnight"},
  {name: "MIST", color: [213, 228, 192], alias: "Mist"},
  {name: "GRANITE", color: [165, 170, 168], alias: "Granite"},
  {name: "CHARCOAL", color: [112, 116, 124], alias: "Charcoal"},
  {name: "SMOKYTEAL", color: [95, 130, 137], alias: "Smokyteal"},
  {name: "STEEL", color: [55, 94, 119], alias: "Steel"},
  {name: "SLATE", color: [94, 105, 94], alias: "Slate"},
  {name: "TURQUOISE", color: [0, 170, 147], alias: "Turquoise"},
  {name: "EMERALD", color: [25, 151, 93], alias: "Emerald"},
  {name: "GRASS", color: [57, 126, 88], alias: "Grass"},
  {name: "FOREST", color: [81, 110, 90], alias: "Forest"},
  {name: "SPRUCE", color: [74, 99, 93], alias: "Spruce"},
  {name: "MOSS", color: [104, 114, 77], alias: "Moss"},
  {name: "SEAFOAM", color: [98, 194, 177], alias: "Sea foam"},
  {name: "KELLYGREEN", color: [103, 179, 70], alias: "Kelly green"},
  {name: "LIGHTTEAL", color: [0, 157, 165], alias: "Light teal"},
  {name: "IVY", color: [22, 155, 98], alias: "Ivy"},
  {name: "PINE", color: [35, 126, 116], alias: "Pine"},
  {name: "LAGOON", color: [47, 97, 101], alias: "Lagoon"},
  {name: "VIOLET", color: [157, 122, 210], alias: "Violet"},
  {name: "ORCHID", color: [170, 96, 191], alias: "Orchid"},
  {name: "PLUM", color: [132, 89, 145], alias: "Plum"},
  {name: "RAISIN", color: [119, 93, 122], alias: "Raisin"},
  {name: "GRAPE", color: [108, 93, 128], alias: "Grape"},
  {name: "SCARLET", color: [246, 80, 88], alias: "Scarlet"},
  {name: "TOMATO", color: [210, 81, 94], alias: "Tomato"},
  {name: "CRANBERRY", color: [209, 81, 122], alias: "Cranberry"},
  {name: "MAROON", color: [158, 76, 110], alias: "Maroon"},
  {name: "RASPBERRYRED", color: [209, 81, 122], alias: "Raspberry"},
  {name: "BRICK", color: [167, 81, 84], alias: "Brick"},
  {name: "LIGHTLIME", color: [227, 237, 85], alias: "Light lime"},
  {name: "SUNFLOWER", color: [255, 181, 17], alias: "Sunflower"},
  {name: "MELON", color: [255, 174, 59], alias: "Melon"},
  {name: "APRICOT", color: [246, 160, 77], alias: "Apricot"},
  {name: "PAPRIKA", color: [238, 127, 75], alias: "Paprika"},
  {name: "PUMPKIN", color: [255, 111, 76], alias: "Pumpkin"},
  {name: "BRIGHTOLIVEGREEN", color: [180, 159, 41], alias: "Olive green"},
  {name: "BRIGHTGOLD", color: [186, 128, 50], alias: "Bright gold"},
  {name: "COPPER", color: [189, 100, 57], alias: "Copper"},
  {name: "MAHOGANY", color: [142, 89, 90], alias: "Mahogany"},
  {name: "BISQUE", color: [242, 205, 207], alias: "Bisque"},
  {name: "BUBBLEGUM", color: [249, 132, 202], alias: "Bubblegum"},
  {name: "LIGHTMAUVE", color: [230, 181, 201], alias: "Lightmauve"},
  {name: "DARKMAUVE", color: [189, 140, 166], alias: "Darkmauve"},
  {name: "WINE", color: [145, 78, 114], alias: "Wine"},
  {name: "GRAY", color: [146, 141, 136], alias: "Gray"},
  {name: "CORAL", color: [255, 142, 145], alias: "Coral"},
  {name: "WHITE", color: [255, 255, 255], alias: "White"},
  {name: "AQUA", color: [94, 200, 229], alias: "Aqua"},
  {name: "MINT", color: [130, 216, 213], alias: "Mint"},
  {name: "CLEARMEDIUM", color: [242, 242, 242], alias: "Clear medium"},
  {name: "FLUORESCENTYELLOW", color: [255, 233, 22], alias: "Fluor yellow"},
  {name: "FLUORESCENTRED", color: [255, 76, 101], alias: "Fluor red"},
  {name: "FLUORESCENTGREEN", color: [68, 214, 44], alias: "Fluor green"},
];

const colorAlias = RISOCOLORS.map(color => color.alias);
const colorName = RISOCOLORS.map(color => color.name);
const colorColour = RISOCOLORS.map(color => color.color);

function _getP5Instance() {
  return window._p5Instance || p5.instance
}

class Riso extends p5.Graphics {
  constructor(channelColor, w, h) {
    const p = _getP5Instance();
    if (!w) w = p.width;
    if (!h) h = p.height;

    super(w, h, null, p);

    let foundColor;

    if (typeof channelColor === "string") {
      channelColor = channelColor.trim().replace(/ /g, '').toUpperCase();
      foundColor = RISOCOLORS.find(c => c.name === channelColor);
    }

    if (foundColor) {
      this.channelColor = foundColor.color;
      this.channelName = foundColor.name;
    } else {
      this.channelColor = channelColor;
      this.channelName = null;
    }

    // store original versions of fill and stroke
    this._fill = p5.prototype.fill.bind(this);
    this._stroke = p5.prototype.stroke.bind(this);
    this._image = p5.prototype.image.bind(this);

    this.stroke(this.channelColor[0], this.channelColor[1], this.channelColor[2]); // stroke with channel color by default

    this.channelIndex = Riso.channels.length;

    Riso.channels.push(this);
  }

  export(filename) {
    if (!filename) {
      if (this.channelName) {
        filename = this.channelName + '.png';
      } else {
        filename = this.channelIndex + '.png';
      }
    }
  
    // Crear un gráfico local para esta llamada a export
    const p = _getP5Instance();
    let buffer = p.createGraphics(this.width, this.height);
  
    buffer.loadPixels();
    this.loadPixels();
  
    for (let i = 0; i < this.pixels.length; i += 4) {
      buffer.pixels[i] = 0;
      buffer.pixels[i + 1] = 0;
      buffer.pixels[i + 2] = 0;
      buffer.pixels[i + 3] = this.pixels[i + 3];
    }
  
    buffer.updatePixels();
    
    // Guardar con el nombre de archivo proporcionado
    buffer.save(filename);
  }
  
  cutout(imageMask) {
    let img = this.get();
    img.cutout(imageMask);
    this.clear();
    this.copy(img, 0, 0, this.width, this.height, 0, 0, img.width, img.height);
  }

  stroke(c) {
    this._stroke(this.channelColor[0], this.channelColor[1], this.channelColor[2], c);
  }

  fill(c) {
    this._fill(this.channelColor[0], this.channelColor[1], this.channelColor[2], c);
  }

  image(img, x, y, w, h) {
    const p = _getP5Instance()
    let alphaValue = p.alpha(this.drawingContext.fillStyle)/255;
    let newImage = p.createImage(img.width, img.height);
    img.loadPixels();
    newImage.loadPixels();
    for (let i=0; i < newImage.pixels.length; i+=4) {
      newImage.pixels[i]   = this.channelColor[0];
      newImage.pixels[i+1] = this.channelColor[1];
      newImage.pixels[i+2] = this.channelColor[2];

      if (img.pixels[i+3] < 255) {
        newImage.pixels[i+3] = img.pixels[i+3] * alphaValue;
      } else {
        newImage.pixels[i+3] = (255 - (img.pixels[i] + img.pixels[i+1] + img.pixels[i+2])/3) * alphaValue;
      }
    }
    newImage.updatePixels();
    this._image(newImage, x, y, w, h);
    return newImage;
  }

  draw() {
    _getP5Instance().image(this, 0, 0);
  }
}

function drawRiso() {
  const p = _getP5Instance();
  p.blendMode(p.MULTIPLY);
  Riso.channels.forEach(c => c.draw());
  p.blendMode(p.BLEND);
}

function exportRiso() {
  Riso.channels.forEach(c => c.export());
}

function clearRiso() {
  Riso.channels.forEach(c => c.clear());
}

function risoNoFill() {
  Riso.channels.forEach(c => c.noFill());
}

function risoNoStroke() {
  Riso.channels.forEach(c => c.noStroke());
}

function rgb2cmyk(r, g, b) {
  // adapted from https://www.rapidtables.com/convert/color/rgb-to-cmyk.html

  let c, m, y, k;

  r = r / 255;
  b = b / 255;
  g = g / 255;

  k = Math.min(1-r, 1-b, 1-g);
  c = 1 - (1-r-k) / (1-k);
  m = 1 - (1-g-k) / (1-k);
  y = 1 - (1-b-k) / (1-k);

  k = 1 - k;

  return [c*255, m*255, y*255, k*255];
}

function extractRGBChannel(img, c) {
  if (c == "r" || c == "red") c = 0;
  if (c == "g" || c == "green") c = 1;
  if (c == "b" || c == "blue") c = 2;
  const p = _getP5Instance();

  let channel = p.createImage(img.width, img.height);
  img.loadPixels();
  channel.loadPixels();
  for (let i = 0; i < img.pixels.length; i+=4) {
    channel.pixels[i]   = img.pixels[i+c];
    channel.pixels[i+1] = img.pixels[i+c];
    channel.pixels[i+2] = img.pixels[i+c];
    channel.pixels[i+3] = img.pixels[i+3];
  }
  channel.updatePixels();
  return channel;
}

function extractCMYKChannel(img, c) {
  const p = _getP5Instance();

  let desiredCMYKChannels = [];
  if(typeof c == "number" && c < 4) {
    desiredCMYKChannels.push(c);
  } else {
    c = c.toLowerCase();
    if (c == "cyan" || c.includes("c")) desiredCMYKChannels.push(0);
    if (c == "magenta" || c.includes("m")) desiredCMYKChannels.push(1);
    if (c == "yellow" || c.includes("y")) desiredCMYKChannels.push(2);
    if (c == "black" || c.includes("k")) desiredCMYKChannels.push(3);
  }
  let channel = p.createImage(img.width, img.height);
  img.loadPixels();
  channel.loadPixels();
  for (let i = 0; i < img.pixels.length; i+=4) {
    let r = img.pixels[i];
    let g = img.pixels[i+1];
    let b = img.pixels[i+2];
    let cmyk = rgb2cmyk(r, g, b);
    let val = 0;
    desiredCMYKChannels.forEach(function(channelIndex){
      val += cmyk[channelIndex];
    });
    val /= desiredCMYKChannels.length;
    channel.pixels[i]   = val;
    channel.pixels[i+1] = val;
    channel.pixels[i+2] = val;
    channel.pixels[i+3] = img.pixels[i+3];
  }
  channel.updatePixels();
  return channel;
}

function halftoneImage(img, shape, frequency, angle, intensity) {
  if (shape === undefined) shape = "circle";
  if (frequency === undefined) frequency = 10;
  if (angle === undefined) angle = 45;
  if (intensity === undefined) intensity = 127;

  const halftonePatterns = {
    line(c, x, y, g, d) {
      c.rect(x, y, g, g * d);
    },
    square(c, x, y, g, d) {
      c.rect(x, y, g * d, g * d);
    },
    circle(c, x, y, g, d) {
      c.ellipse(x, y, d * g, d * g);
    },
    ellipse(c, x, y, g, d) {
      c.ellipse(x, y, g * d * 0.7, g*d);
    },
    cross(c, x, y, g, d) {
      c.rect(x, y, g, g*d);
      c.rect(x, y, g * d, g);
    },
  }

  patternFunction = typeof shape === "function" ? shape : halftonePatterns[shape];

  const w = img.width;
  const h = img.height;

  const p = _getP5Instance();

  const rotatedCanvas = p.createGraphics(img.width*2, img.height*2);
  rotatedCanvas.background(255);
  rotatedCanvas.imageMode(p.CENTER);
  rotatedCanvas.push();
  rotatedCanvas.translate(img.width, img.height);
  rotatedCanvas.rotate(-angle * Math.PI / 180); // Convertir grados a radianes
  rotatedCanvas.image(img, 0, 0);
  rotatedCanvas.pop();
  rotatedCanvas.loadPixels();

  const out = p.createGraphics(w*2, h*2);
  out.background(255);
  out.ellipseMode(p.CORNER);
  out.rectMode(p.CENTER);
  out.fill(0);
  out.noStroke();

  let gridsize = frequency;

  for (let x=0; x < w*2; x+=gridsize) {
    for (let y=0; y < h*2; y+=gridsize) {
      const avg = rotatedCanvas.pixels[(x + y*w*2)* 4];

      if (avg < 255) {
        const darkness = (255 - avg) / 255;
        patternFunction(out, x, y, gridsize, darkness);
      }
    }
  }
  rotatedCanvas.background(255);
  rotatedCanvas.push();
  rotatedCanvas.translate(w, h);
  rotatedCanvas.rotate(angle * Math.PI / 180); // Convertir grados a radianes
  rotatedCanvas.image(out, 0, 0);
  rotatedCanvas.pop();

  const result = rotatedCanvas.get(w/2, h/2, w, h);
  if (intensity === false) {
    return result;
  } else {
    return ditherImage(result, "none", intensity);
  }
}



function ditherImage(img, type, threshold) {
  // source adapted from: https://github.com/meemoo/meemooapp/blob/44236a29574812026407c0288ab15390e88b556a/src/nodes/image-monochrome-worker.js

  if (threshold === undefined) threshold = 128;

  let out = img.get();
  let w = out.width;
  let newPixel, err;


  let bayerThresholdMap = [
    [  15, 135,  45, 165 ],
    [ 195,  75, 225, 105 ],
    [  60, 180,  30, 150 ],
    [ 240, 120, 210,  90 ]
  ];

  let lumR = [];
  let lumG = [];
  let lumB = [];

  out.loadPixels();

  for (let i=0; i<256; i++) {
    lumR[i] = i*0.299;
    lumG[i] = i*0.587;
    lumB[i] = i*0.114;
  }

  for (let i = 0; i <= out.pixels.length; i += 4) {
    out.pixels[i] = Math.floor(lumR[out.pixels[i]] + lumG[out.pixels[i+1]] + lumB[out.pixels[i+2]]);
  }

  for (let i = 0; i <= out.pixels.length; i+=4) {

    if (type === "none") {
      // No dithering
      out.pixels[i] = out.pixels[i] < threshold ? 0 : 255;
    } else if (type === "bayer") {
      // 4x4 Bayer ordered dithering algorithm
      let x = i/4 % w;
      let y = Math.floor(i/4 / w);
      let map = Math.floor( (out.pixels[i] + bayerThresholdMap[x%4][y%4]) / 2 );
      out.pixels[i] = (map < threshold) ? 0 : 255;
    } else if (type === "floydsteinberg") {
      // Floyd–Steinberg dithering algorithm
      newPixel = out.pixels[i] < 129 ? 0 : 255;
      err = Math.floor((out.pixels[i] - newPixel) / 16);
      out.pixels[i] = newPixel;
      out.pixels[i       + 4 ] += err*7;
      out.pixels[i + 4*w - 4 ] += err*3;
      out.pixels[i + 4*w     ] += err*5;
      out.pixels[i + 4*w + 4 ] += err*1;
    } else {
      // Bill Atkinson's dithering algorithm
      newPixel = out.pixels[i] < 129 ? 0 : 255;
      err = Math.floor((out.pixels[i] - newPixel) / 8);
      out.pixels[i] = newPixel;

      out.pixels[i       + 4 ] += err;
      out.pixels[i       + 8 ] += err;
      out.pixels[i + 4*w - 4 ] += err;
      out.pixels[i + 4*w     ] += err;
      out.pixels[i + 4*w + 4 ] += err;
      out.pixels[i + 8*w     ] += err;
    }

    // Set g and b pixels equal to r
    out.pixels[i + 1] = out.pixels[i + 2] = out.pixels[i];
  }
  out.updatePixels();
  return out;

}


function lookupTable() {
  //https://gist.github.com/kishmiryan-karlen/559c190f6c20856ee323
  //https://www.emanueleferonato.com/2018/06/09/playing-with-javascript-photos-and-3d-luts-lookup-tables/
}

p5.Image.prototype.cutout = function(p5Image) {
  // this is basically the same as mask but without an different compositeoperation

  if (p5Image === undefined) {
    p5Image = this;
  }
  let currBlend = this.drawingContext.globalCompositeOperation;

  let scaleFactor = 1;
  if (p5Image instanceof p5.Renderer) {
    scaleFactor = p5Image._pInst._pixelDensity;
  }

  let copyArgs = [
    p5Image,
    0,
    0,
    scaleFactor * p5Image.width,
    scaleFactor * p5Image.height,
    0,
    0,
    this.width,
    this.height
  ];

  this.drawingContext.globalCompositeOperation = 'destination-out';
  p5.Image.prototype.copy.apply(this, copyArgs);
  this.drawingContext.globalCompositeOperation = currBlend;
  this.setModified(true);
};

Riso.channels = [];