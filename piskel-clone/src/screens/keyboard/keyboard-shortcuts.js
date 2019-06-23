import Tools from '../tools/tools';

class Keyboard extends Tools {
  constructor() {
    super('keyboard');
    this.keyboardButton = document.querySelector('.keyboard-modal--button');
    this.keyboardModal = document.querySelector('.keyboard-contain');
    this.closeKeyboard = document.querySelector('.close');
  }

  showModalWindow() {
    this.keyboardModal.style.display = 'flex';
  }

  closeModalWindow() {
    this.keyboardModal.style.display = 'none';
  }

  handleKeyDown(e) {
    const key = e.code;
    const event = {
      target: null,
    };
    switch (key) {
      case 'KeyP':
        event.target = this.pen;
        break;
      case 'KeyB':
        event.target = this.paintBucket;
        break;
      case 'KeyA':
        event.target = this.paintSameColor;
        break;
      case 'KeyO':
        event.target = this.colorPicker;
        break;
      case 'KeyE':
        event.target = this.eraser;
        break;
      case 'KeyL':
        event.target = this.line;
        break;
      case 'KeyR':
        event.target = this.rect;
        break;
      case 'KeyC':
        event.target = this.circle;
        break;
      case 'KeyT':
        event.target = this.dithering;
        break;
      case 'KeyU':
        event.target = this.lighten;
        break;
      default:
        break;
    }
    if (event.target !== null) {
      this.chooseTools(event);
    }
  }

  handleKeyboardModalWindow() {
    this.keyboardButton.addEventListener('click', this.showModalWindow.bind(this));
    this.closeKeyboard.addEventListener('click', this.closeModalWindow.bind(this));
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
}

export default Keyboard;
