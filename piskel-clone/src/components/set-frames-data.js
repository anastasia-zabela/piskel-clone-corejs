import storage from './storage';

function setFramesData(x, y) {
  const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
  const row = y / storage.canvas.sizeRect;
  const col = x / storage.canvas.sizeRect;
  const indexPiksel = storage.canvas.sizeCanvas * row + col;
  if (storage.currentTool === 'pen') {
    storage.framesData[currentNum][indexPiksel] = [x, y,
      storage.canvas.sizeRect, storage.colors.primaryColor];
  } else if (storage.currentTool === 'eraser') {
    storage.framesData[currentNum][indexPiksel] = null;
  }
}

export default setFramesData;
