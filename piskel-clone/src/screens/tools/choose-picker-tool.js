import storage from '../../components/storage';
import fullColorHex from '../../components/rgb-to-hex';

const primaryColorField = document.querySelector('.colors__primary-color');

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
