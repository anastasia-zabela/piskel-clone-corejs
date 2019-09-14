import storage from '../../components/storage';

class Info {
  constructor() {
    this.coordsInfo = document.querySelector('.info__coords');
  }

  getCoords(e) {
    const { canvasElement, sizeRect } = storage.canvas;
    for (let h = 0; h < canvasElement.width; h += sizeRect) {
      for (let v = 0; v < canvasElement.height; v += sizeRect) {
        if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
          this.coordsInfo.innerHTML = `[${h / sizeRect}:${v / sizeRect}]`;
        }
      }
    }
  }

  removeCoords() {
    this.coordsInfo.innerHTML = '';
  }

  showCoordsOfPixel(canvas) {
    canvas.addEventListener('mousemove', this.getCoords.bind(this));
    canvas.addEventListener('mouseleave', this.removeCoords.bind(this));
  }
}

export default Info;
