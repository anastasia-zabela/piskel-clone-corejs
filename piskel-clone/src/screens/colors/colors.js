import storage from '../../components/storage';

const primaryColorField = document.querySelector('.colors__primary-color');
const secondaryColorField = document.querySelector('.colors__secondary-color');
const arrowChange = document.querySelector('.colors__arrow');

function changePrimaryColor() {
  storage.colors.primaryColor = this.value;
}

function changeSecondaryColor() {
  storage.colors.secondaryColor = this.value;
}

function changeColors() {
  const { primaryColor, secondaryColor } = storage.colors;
  storage.colors.primaryColor = secondaryColor;
  storage.colors.secondaryColor = primaryColor;
  primaryColorField.value = secondaryColor;
  secondaryColorField.value = primaryColor;
}

function handleColorsChange() {
  primaryColorField.addEventListener('change', changePrimaryColor);
  secondaryColorField.addEventListener('change', changeSecondaryColor);
  arrowChange.addEventListener('click', changeColors);
}

export default handleColorsChange;
