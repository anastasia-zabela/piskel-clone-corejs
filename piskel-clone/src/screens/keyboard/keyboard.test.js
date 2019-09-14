import Keyboard from './keyboard-shortcuts';

describe('Keyboard', () => {
  it('showModalWindow should change display of modal window to flex', () => {
    document.body.innerHTML = '<section class="keyboard-contain"></section>';
    const keyboard = new Keyboard();
    keyboard.showModalWindow();
    const result = getComputedStyle(keyboard.keyboardModal).display;

    expect(result).toBe('flex');
  });

  it('closeModalWindow should change display of modal window to none after showModalWindow function', () => {
    document.body.innerHTML = '<section class="keyboard-contain"></section>';
    const keyboard = new Keyboard();
    keyboard.showModalWindow();
    keyboard.closeModalWindow();
    const result = getComputedStyle(keyboard.keyboardModal).display;

    expect(result).toBe('none');
  });

  it('handleKeyDown should passes target tool by key code to changeTools function', () => {
    document.body.innerHTML = '<div class="tools">'
    + '<button class="tools__pen-tool"></button>'
    + '</div>';
    const keyboard = new Keyboard();
    const e = {
      code: 'KeyP',
    };
    keyboard.handleKeyDownTools(e);
    const result = keyboard.currentTool;

    expect(result).toBe(keyboard.pen);
  });
});
