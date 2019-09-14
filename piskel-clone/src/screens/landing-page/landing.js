import Screenshot from '../../assets/screenshot.jpg';
import storage from '../../components/storage';
import animation1 from '../../assets/animation1.gif';
import animation2 from '../../assets/animation2.gif';
import animation3 from '../../assets/animation3.gif';
import animation5 from '../../assets/animation5.gif';

export default class Landing {
  constructor() {
    this.landingPage = document.querySelector('.landing-page');
    this.piskelApp = document.querySelector('.piskel-app');
    this.aboutApp = document.querySelector('.landing-page__piskel-app');
    this.createSpriteButton = document.querySelector('.landing-page__piskel-app--create-sprite');
    this.backToLandingButton = document.querySelector('.back-to-landing-page-button');
    this.animationsExample = document.querySelector('.animations');
  }

  loadScreenshot() {
    const screen = new Image();
    screen.src = Screenshot;
    this.aboutApp.insertAdjacentElement('beforeend', screen);
  }

  loadAnimations() {
    const anim1 = new Image();
    anim1.src = animation1;
    const anim2 = new Image();
    anim2.src = animation2;
    const anim3 = new Image();
    anim3.src = animation3;
    const anim5 = new Image();
    anim5.src = animation5;
    this.animationsExample.insertAdjacentElement('beforeend', anim1);
    this.animationsExample.insertAdjacentElement('beforeend', anim2);
    this.animationsExample.insertAdjacentElement('beforeend', anim3);
    this.animationsExample.insertAdjacentElement('beforeend', anim5);
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
