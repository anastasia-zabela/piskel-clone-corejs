class Storage {
  constructor() {
    this.wrapper = document.querySelector('.wrapper');
    this.currentTool = null;
    this.colors = {
      primaryColor: 'black',
      secondaryColor: null,
    };
    this.canvas = {
      canvasElement: null,
      sizeCanvas: 32,
      sizeRect: null,
    };
    this.frame = {
      countOfFrame: 1,
      countOfDataFrame: 1,
      currentFrame: document.querySelector('.frames-contain__wrapper-frame'),
    };
    this.framesData = {
      1: new Array(this.canvas.sizeCanvas * this.canvas.sizeCanvas).fill(null),
    };
  }
}

const storage = new Storage();

export default storage;
