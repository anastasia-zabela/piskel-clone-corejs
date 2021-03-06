import storage from './storage';

function setFramesData(x, y, color) {
  const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
  const row = y / storage.canvas.sizeRect;
  const col = x / storage.canvas.sizeRect;
  const indexPiksel = storage.canvas.sizeCanvas * row + col;
  if (storage.currentTool === 'eraser') {
    storage.framesData[currentNum][indexPiksel] = null;
  } else if (storage.currentTool === 'lighten') {
    storage.framesData[currentNum][indexPiksel] = [x, y,
      storage.canvas.sizeRect, color];
  } else {
    storage.framesData[currentNum][indexPiksel] = [x, y,
      storage.canvas.sizeRect, storage.colors.primaryColor];
  }
  return indexPiksel;
}

export default setFramesData;
