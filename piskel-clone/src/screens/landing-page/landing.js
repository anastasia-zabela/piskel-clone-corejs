import Screenshot from '../../assets/screenshot.jpg';
import storage from '../../components/storage';

export default class Landing {
  constructor() {
    this.landingPage = document.querySelector('.landing-page');
    this.piskelApp = document.querySelector('.piskel-app');
    this.aboutApp = document.querySelector('.landing-page__piskel-app');
    this.createSpriteButton = document.querySelector('.landing-page__piskel-app--create-sprite');
    this.backToLandingButton = document.querySelector('.back-to-landing-page-button');
  }

  loadImage() {
    const screen = new Image();
    screen.src = Screenshot;
    this.aboutApp.insertAdjacentElement('beforeend', screen);
  }

  loadApp() {
    this.landingPage.style.display = 'none';
    this.piskelApp.style.display = 'grid';
    storage.display.landing = 'none';
    storage.display.app = 'grid';
  }

  backToLanding() {
    this.landingPage.style.display = 'block';
    this.piskelApp.style.display = 'none';
    storage.display.landing = 'block';
    storage.display.app = 'none';
  }

  handleCreateSpriteButton() {
    this.createSpriteButton.addEventListener('click', this.loadApp.bind(this));
    this.backToLandingButton.addEventListener('click', this.backToLanding.bind(this));
  }
}
