import storage from '../../components/storage';

const primaryColorField = document.querySelector('.colors__primary-color');
const predefinedColors = document.querySelector('.predefined-colors');

function getCurrentColor(event) {
  let { target } = event;
  while (target !== predefinedColors && storage.currentTool === 'colorPicker') {
    if (target.tagName === 'BUTTON') {
      storage.colors.primaryColor = getComputedStyle(target).backgroundColor;
      primaryColorField.style.backgroundColor = storage.colors.primaryColor;
      localStorage.setItem('storage', JSON.stringify(storage));
    }
    target = target.parentNode;
  }
}

function handleChooseColor() {
  predefinedColors.addEventListener('click', getCurrentColor);
}

export default handleChooseColor;
