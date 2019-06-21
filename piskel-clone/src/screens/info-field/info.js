import storage from '../../components/storage';

const coordsInfo = document.querySelector('.info__coords');

function getCoords(e) {
  const { canvasElement, sizeRect } = storage.canvas;
  for (let h = 0; h < canvasElement.width; h += sizeRect) {
    for (let v = 0; v < canvasElement.height; v += sizeRect) {
      if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
        coordsInfo.innerHTML = `[${h / sizeRect}:${v / sizeRect}]`;
      }
    }
  }
}

function removeCoords() {
  coordsInfo.innerHTML = '';
}

function showCoordsOfPixel(canvas) {
  canvas.addEventListener('mousemove', getCoords);
  canvas.addEventListener('mouseleave', removeCoords);
}

export default showCoordsOfPixel;
