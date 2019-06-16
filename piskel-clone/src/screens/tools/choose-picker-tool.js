import storage from '../../components/storage';

const primaryColorField = document.querySelector('.colors__primary-color');

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
}

function fullColorHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
}

function chooseColor(e) {
  if (storage.currentTool === 'colorPicker') {
    const ctx = this.getContext('2d');
    const imgData = ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
    const [r, g, b] = imgData.data;
    storage.colors.primaryColor = `rgb(${r}, ${g}, ${b})`;
    primaryColorField.value = `#${fullColorHex(r, g, b)}`;
  }
}

function addColorPickerTool(canvas) {
  canvas.addEventListener('click', chooseColor);
}

export default addColorPickerTool;
