class Storage {
  constructor() {
    this.wrapper = document.querySelector('.wrapper');
    this.currentTool = null;
    this.colors = {
      primaryColor: null,
      secondaryColor: null,
    };
    this.canvas = {
      canvasElement: null,
      sizeCanvas: null,
      sizeRect: null,
    };
    this.frame = {
      countOfFrame: 1,
      countOfDataFrame: 1,
      currentFrame: document.querySelector('.frames-contain__wrapper-frame'),
    };
  }
}

const storage = new Storage();

export default storage;
