import storage from '../../components/storage';

const primaryColorField = document.querySelector('.colors__primary-color');
// const secondaryColorField = document.querySelector('.colors__secondary-color');
const predefinedColors = document.querySelector('.predefined-colors');

function getCurrentColor(event) {
  let { target } = event;
  while (target !== predefinedColors && storage.currentTool === 'colorPicker') {
    if (target.tagName === 'BUTTON') {
      storage.primaryColor = getComputedStyle(target).backgroundColor;
      primaryColorField.style.backgroundColor = storage.primaryColor;
      localStorage.setItem('storage', JSON.stringify(storage));
    }
    target = target.parentNode;
  }
}

function handleChooseColor() {
  predefinedColors.addEventListener('click', getCurrentColor);
}

export default handleChooseColor;
