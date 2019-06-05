class Canvas {
  constructor(sizeCanvas) {
    this.sizeCanvas = sizeCanvas;
    this.sizeRect = Math.floor(800 / this.sizeCanvas);
  }

  createCanvas() {
    const canvas = document.querySelector('.canvas');
    canvas.width = this.sizeRect * this.sizeCanvas;
    canvas.height = canvas.width;
  }
}

export default Canvas;
