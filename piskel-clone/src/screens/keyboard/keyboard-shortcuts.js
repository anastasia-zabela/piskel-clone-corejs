import Tools from '../tools/tools';

class Keyboard extends Tools {
  constructor() {
    super('keyboard');
    this.keyboardButton = document.querySelector('.keyboard-modal--button');
    this.keyboardModal = document.querySelector('.keyboard-contain');
    this.closeKeyboard = document.querySelector('.close');
    this.modalButtons = Array.prototype.slice.call(document.querySelectorAll('.keyboard-contain__modal button'));
    this.shortcuts = {
      pen: 'KeyP',
      paintBucket: 'KeyB',
      paintSameColor: 'KeyA',
      colorPicker: 'KeyO',
      eraser: 'KeyE',
      line: 'KeyL',
      rectangle: 'KeyR',
      circle: 'KeyC',
      dithering: 'KeyT',
      lighten: 'KeyU',
      move: 'KeyM',
      shape: 'KeyS',
    };
    this.currentButton = null;
    this.handler = this.handleKeyDownTools.bind(this);
    this.handlerChange = this.changeShortcuts.bind(this);
  }

  showModalWindow() {
    this.keyboardModal.style.display = 'flex';
    document.removeEventListener('keydown', this.handler);
  }

  closeModalWindow() {
    this.keyboardModal.style.display = 'none';
    document.addEventListener('keydown', this.handler);
  }

  handleKeyDownTools(e) {
    const key = e.code;
    const event = {
      target: null,
    };
    switch (key) {
      case this.shortcuts.pen:
        event.target = this.pen;
        break;
      case this.shortcuts.paintBucket:
        event.target = this.paintBucket;
        break;
      case this.shortcuts.paintSameColor:
        event.target = this.paintSameColor;
        break;
      case this.shortcuts.colorPicker:
        event.target = this.colorPicker;
        break;
      case this.shortcuts.eraser:
        event.target = this.eraser;
        break;
      case this.shortcuts.line:
        event.target = this.line;
        break;
      case this.shortcuts.rectangle:
        event.target = this.rectangle;
        break;
      case this.shortcuts.circle:
        event.target = this.circle;
        break;
      case this.shortcuts.dithering:
        event.target = this.dithering;
        break;
      case this.shortcuts.lighten:
        event.target = this.lighten;
        break;
      case this.shortcuts.move:
        event.target = this.move;
        break;
      case this.shortcuts.shape:
        if (!e.shiftKey) {
          event.target = this.shape;
        }
        break;
      default:
        break;
    }
    if (event.target !== null) {
      this.chooseTools(event);
    }
  }

  changeShortcuts(e) {
    const { code } = e;
    const currentButtonValue = this.currentButton.getAttribute('data-key-value');
    this.shortcuts[currentButtonValue] = code;
    this.currentButton.style.borderColor = '#acc7cd';
    this.currentButton.style.color = '#acc7cd';
    this.currentButton.innerHTML = code.slice(3);
    const keysShortcuts = Object.keys(this.shortcuts);
    keysShortcuts.forEach((elem) => {
      if (this.shortcuts[elem] === code && currentButtonValue !== elem) {
        this.shortcuts[elem] = null;
        this.modalButtons.forEach((el) => {
          if (el.innerText === code.slice(3) && this.currentButton !== el) {
            const button = el;
            button.innerText = '?';
          }
        });
      }
    });
    document.removeEventListener('keydown', this.handlerChange);
  }

  startChangeShortcuts(e) {
    const { target } = e;
    target.style.borderColor = '#e1e6e2';
    target.style.color = '#e1e6e2';
    this.currentButton = target;
    document.addEventListener('keydown', this.handlerChange);
  }

  handleKeyboardModalWindow() {
    this.keyboardButton.addEventListener('click', this.showModalWindow.bind(this));
    this.closeKeyboard.addEventListener('click', this.closeModalWindow.bind(this));
    this.modalButtons.forEach((elem) => {
      elem.addEventListener('click', this.startChangeShortcuts.bind(this));
    });
    document.addEventListener('keydown', this.handler);
  }
}

export default Keyboard;
