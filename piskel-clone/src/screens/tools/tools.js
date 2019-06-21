class Tools {
  constructor() {
    this.tools = document.querySelector('.tools');
    this.pen = document.querySelector('.tools__pen-tool');
    this.paintBucket = document.querySelector('.tools__paint-bucket-tool');
    this.paintSameColor = document.querySelector('.tools__paint-same-color-tool');
    this.colorPicker = document.querySelector('.tools__color-picker-tool');
    this.eraser = document.querySelector('.tools__eraser-tool');
    this.line = document.querySelector('.tools__line-tool');
    this.rect = document.querySelector('.tools__rectangle-tool');
    this.circle = document.querySelector('.tools__circle-tool');
    this.dithering = document.querySelector('.tools__dithering-tool');
    this.currentTool = null;
  }
}

const tools = new Tools();

export default tools;
