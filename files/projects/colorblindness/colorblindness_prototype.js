/*
Protanopia Simulation Prototype for p5
*/

function setup() {
  colorMode(RGB, 255);
  var canvas = createCanvas(400, 300);
  canvas.parent('sketch-holder');

  prepairProtanopiaSimulation();

  background(255);
}

function draw() {
  fill(color(random(255), random(255), random(255), 128));
  stroke(0);
  strokeWeight(1);
  rect(random(width), random(height), 25, 25);

  strokeWeight(5);
  line(0, height / 2, width, height / 2);
  simulateProtanopia();

  fill(255);
  noStroke();
  rect(0, 0, 100, 20);
  fill(0);
  text("frameRate: " + round(getFrameRate() * 10) / 10, 5, 10);
}

/**
 * ColorBlindness Prototype Code
 */

var MAX_ENCODED_VALUE = Math.pow(2, 10);

var rgb2lms = new Float32Array([0.31399022, 0.63951294, 0.04649755,
                                0.15537241, 0.75789446, 0.08670142,
                                0.01775239, 0.10944209, 0.87256922]);

var protanopiaSim = new Float32Array([0.0, 1.05118294, -0.05116099, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);

var lms2rgb = new Float32Array([ 5.47221206, -4.64196010,  0.16963708,
                                -1.12524190,  2.29317094, -0.16789520,
                                 0.02980165, -0.19318073,  1.16364789]);

var removeGammaCorrectionLUT;
var protanopiaLUT;
var applyGammaCorrectionLUT;

/**
 * Precalculate Protanopia Lookup table
 */
function prepairProtanopiaSimulation() {
  removeGammaCorrectionLUT = preCalcRemoveGammaCorrectionLUT();
  applyGammaCorrectionLUT = preCalcApplyGammaCorrectionLUT();
  protanopiaLUT = preCalcProtanopiaLUT(protanopiaSim);
}

/**
 * Simulate Protanopia by transforming pixels with precalculated lookup table.
 */
function simulateProtanopia() {
  loadPixels();

  var pixelRGBA = new Uint32Array(pixels.buffer);
  for (var i = 0; i < pixelRGBA.length / 2; ++i) {
    pixelRGBA[i] = protanopiaLUT[pixelRGBA[i] & 0x00FFFFFF];
  }

  updatePixels();
}

/**
 * Precalculate remove standard gamma correction lookup table
 */
function preCalcRemoveGammaCorrectionLUT() {
  var lut = new Float32Array(256);

  for (var i = 0; i < lut.length; i++) {
    var s = i / 255;
    if (s <= 0.04045) {
      lut[i] = s / 12.92;
    } else {
      lut[i] = Math.pow((s + 0.055) / 1.055, 2.4);
    }
  }

  return lut;
}

/**
 * Precalculate apply standard gamma correction lookup table
 */
function preCalcApplyGammaCorrectionLUT() {
  var lut = new Uint8ClampedArray(MAX_ENCODED_VALUE);

  for (var i = 0; i < lut.length; i++) {
    var s = i / MAX_ENCODED_VALUE;
    if (s <= 0.0031308) {
      lut[i] = 255 * (12.92 * s);
    } else {
      lut[i] = 255 * (1.055 * Math.pow(s, 0.41666) - 0.055);
    }
  }

  return lut;
}

/**
 * Precalculate ColorBlindness lookup table
 *
 * @param {Float32Array[9]} sim Simulation matrix
 * @return {Uint32Array[256 * 256 * 256]} ColorBlindness LUT
 */
function preCalcProtanopiaLUT(sim) {
  var lut = new Uint32Array(256 * 256 * 256);

  // store color being operated on in shared buffer
  var colNum = new Uint32Array(1);
  var sRGBA = new Uint8ClampedArray(colNum.buffer);
  // intermediary value holders, declared once and recycled for performance
  var linRGB = new Float32Array(3);
  var simLinRGB = new Float32Array(3);

  // precalculate these for performance
  var precalcMatrixProduct = multMatrixMatrix(lms2rgb, multMatrixMatrix(sim, rgb2lms));
  var precalcMultiplier = MAX_ENCODED_VALUE - 1;

  for (var c = 0; c < lut.length; c++) {
    // byte order is alpha blue green red for masks!
    colNum[0] = c;

    // remove gamma correction, converting color to linear RGB
    linRGB[0] = removeGammaCorrectionLUT[sRGBA[0]];
    linRGB[1] = removeGammaCorrectionLUT[sRGBA[1]];
    linRGB[2] = removeGammaCorrectionLUT[sRGBA[2]];

    // simulate color blindness, keeping color in linear RGB
    multMatrixVector(precalcMatrixProduct, linRGB, simLinRGB);

    // apply gamma correction
    sRGBA[0] = applyGammaCorrectionLUT[Math.floor(simLinRGB[0] * precalcMultiplier)];
    sRGBA[1] = applyGammaCorrectionLUT[Math.floor(simLinRGB[1] * precalcMultiplier)];
    sRGBA[2] = applyGammaCorrectionLUT[Math.floor(simLinRGB[2] * precalcMultiplier)];
    // necessary alpha value
    sRGBA[3] = 255;

    lut[c] = colNum[0];
  }

  return lut;
}

/**
 * Right-Multiply matrix by vector
 *
 * Input parameter m is an array but treat it as a 3x3 array.
 *
 * result goes into out parameter inplace to inprove performance.
 *
 * @param {Float32Array[9]} m Left matrix
 * @param {Float32Array[3]} v Right vector
 * @param {Float32Array[3]} out Result vector, passed in to reduce allocations
 */
function multMatrixVector(m, v, out) {
  out[0] = m[0] * v[0] + m[1] * v[1] + m[2] * v[2];
  out[1] = m[3] * v[0] + m[4] * v[1] + m[5] * v[2];
  out[2] = m[6] * v[0] + m[7] * v[1] + m[8] * v[2];
}

/**
 * Multiply two 'matrices' together
 *
 * Input parameters m1 and m2 are arrays but treat them as 3x3 arrays.
 *
 * @param {Float32Array[9]} m1 Left matrix
 * @param {Float32Array[9]} m2 Right matrix
 * @return {Float32Array[9]} Matrix product
 */
function multMatrixMatrix(m1, m2) {
  var out = new Float32Array(9);

  out[0] = m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6];
  out[1] = m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7];
  out[2] = m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8];

  out[3] = m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6];
  out[4] = m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7];
  out[5] = m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8];

  out[6] = m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6];
  out[7] = m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7];
  out[8] = m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8];

  return out;
}
