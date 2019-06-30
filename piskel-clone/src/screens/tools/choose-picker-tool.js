import storage from '../../components/storage';
import fullColorHex from '../../components/rgb-to-hex';

const primaryColorField = document.querySelector('.colors__primary-color');

function chooseColor(e) {
  if (storage.currentTool === 'colorPicker') {
    const ctx = this.getContext('2d');
    const imgData = ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
    const [r, g, b] = imgData.data;
    const hexColor = `#${fullColorHex(r, g, b)}`;
    storage.colors.primaryColor = hexColor;
    primaryColorField.value = hexColor;
  }
}

function addColorPickerTool(canvas) {
  canvas.addEventListener('click', chooseColor);
}

export default addColorPickerTool;
