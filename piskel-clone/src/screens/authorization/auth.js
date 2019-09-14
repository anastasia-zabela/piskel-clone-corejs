export default class Authorization {
  constructor() {
    this.sinInButton = document.querySelector('.header__sing-in-button');
    this.authWindow = document.querySelector('.authorization');
    this.close = document.querySelector('.authorization .close');
  }

  showSingInWindow() {
    this.authWindow.style.display = 'flex';
  }

  closeSingInWindow() {
    this.authWindow.style.display = 'none';
  }

  handleSingInButton() {
    this.sinInButton.addEventListener('click', this.showSingInWindow.bind(this));
    this.close.addEventListener('click', this.closeSingInWindow.bind(this));
  }
}
