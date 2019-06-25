class Storage {
  constructor() {
    this.currentTool = null;
    this.colors = {
      primaryColor: '#acc7cd',
      secondaryColor: '#e1e6e2',
    };
    this.canvas = {
      canvasContain: document.querySelector('.canvas-contain'),
      canvasElement: document.querySelector('.canvas-contain__drawing-canvas'),
      canvasSecondary: null,
      sizeCanvas: 32,
      sizeRect: 25,
    };
    this.frame = {
      countOfFrame: 1,
      countOfDataFrame: 0,
      currentFrame: document.querySelector('.frames-contain__wrapper-frame'),
    };
    this.framesData = [
      new Array(this.canvas.sizeCanvas * this.canvas.sizeCanvas).fill(null),
    ];
    this.currentFps = '0';
  }
}

const storage = new Storage();

export default storage;
