import tools from '../tools/tools';
import chooseTools from '../tools/choose-tools';

const keyboardButton = document.querySelector('.keyboard-modal--button');
const keyboardModal = document.querySelector('.keyboard-contain');
const closeKeyboard = document.querySelector('.close');

function showModalWindow() {
  keyboardModal.style.display = 'flex';
}

function closeModalWindow() {
  keyboardModal.style.display = 'none';
}

function handleKeyDown(e) {
  const key = e.code;
  const event = {
    target: null,
  };
  switch (key) {
    case 'KeyP':
      event.target = tools.pen;
      break;
    case 'KeyB':
      event.target = tools.paintBucket;
      break;
    case 'KeyA':
      event.target = tools.paintSameColor;
      break;
    case 'KeyO':
      event.target = tools.colorPicker;
      break;
    case 'KeyE':
      event.target = tools.eraser;
      break;
    case 'KeyL':
      event.target = tools.line;
      break;
    case 'KeyR':
      event.target = tools.rect;
      break;
    case 'KeyC':
      event.target = tools.circle;
      break;
    case 'KeyT':
      event.target = tools.dithering;
      break;
    case 'KeyU':
      event.target = tools.lighten;
      break;
    default:
      break;
  }
  if (event.target !== null) {
    chooseTools(event);
  }
}

function handleKeyboardModalWindow() {
  keyboardButton.addEventListener('click', showModalWindow);
  closeKeyboard.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', handleKeyDown);
}

export default handleKeyboardModalWindow;
