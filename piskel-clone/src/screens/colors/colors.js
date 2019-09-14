import storage from '../../components/storage';

class Colors {
  constructor() {
    this.primaryColorField = document.querySelector('.colors__primary-color');
    this.secondaryColorField = document.querySelector('.colors__secondary-color');
    this.arrowChange = document.querySelector('.colors__arrow');
  }

  static changePrimaryColor() {
    storage.colors.primaryColor = this.value;
  }

  static changeSecondaryColor() {
    storage.colors.secondaryColor = this.value;
  }

  changeColors() {
    const { primaryColor, secondaryColor } = storage.colors;
    storage.colors.primaryColor = secondaryColor;
    storage.colors.secondaryColor = primaryColor;
    this.primaryColorField.value = secondaryColor;
    this.secondaryColorField.value = primaryColor;
  }

  handleColorsChange() {
    this.primaryColorField.addEventListener('change', Colors.changePrimaryColor);
    this.secondaryColorField.addEventListener('change', Colors.changeSecondaryColor);
    this.arrowChange.addEventListener('click', this.changeColors.bind(this));
  }
}

export default Colors;
