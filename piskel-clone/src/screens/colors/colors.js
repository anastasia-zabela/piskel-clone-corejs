import storage from '../../components/storage';

const primaryColorField = document.querySelector('.colors__primary-color');
const secondaryColorField = document.querySelector('.colors__secondary-color');

function changePrimaryColor() {
  storage.colors.primaryColor = this.value;
}

function changeSecondaryColor() {
  storage.colors.secondaryColor = this.value;
}

function handleColorsChange() {
  primaryColorField.addEventListener('change', changePrimaryColor);
  secondaryColorField.addEventListener('change', changeSecondaryColor);
}

export default handleColorsChange;
