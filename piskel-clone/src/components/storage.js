class Storage {
  constructor() {
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
  }
}

const storage = new Storage();

export default storage;
