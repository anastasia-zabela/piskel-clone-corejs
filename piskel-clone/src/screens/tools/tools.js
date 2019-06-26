import storage from '../../components/storage';

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
    this.lighten = document.querySelector('.tools__lighten-tool');
    this.move = document.querySelector('.tools__move-tool');
    this.shape = document.querySelector('.tools__shape-selection-tool');
    this.currentTool = null;
  }

  chooseTools(event) {
    let { target } = event;
    while (target !== this.tools) {
      if (target.tagName === 'BUTTON') {
        if (storage.currentTool !== null) { this.currentTool.style.background = ''; }
        const colorTools = '#acc7cd';
        switch (target) {
          case this.pen:
            storage.currentTool = 'pen';
            this.currentTool = this.pen;
            this.pen.style.background = colorTools;
            break;
          case this.paintBucket:
            storage.currentTool = 'paintBucket';
            this.currentTool = this.paintBucket;
            this.paintBucket.style.background = colorTools;
            break;
          case this.paintSameColor:
            storage.currentTool = 'paintSameColor';
            this.currentTool = this.paintSameColor;
            this.paintSameColor.style.background = colorTools;
            break;
          case this.colorPicker:
            storage.currentTool = 'colorPicker';
            this.currentTool = this.colorPicker;
            this.colorPicker.style.background = colorTools;
            break;
          case this.eraser:
            storage.currentTool = 'eraser';
            this.currentTool = this.eraser;
            this.eraser.style.background = colorTools;
            break;
          case this.line:
            storage.currentTool = 'line';
            this.currentTool = this.line;
            this.line.style.background = colorTools;
            break;
          case this.rect:
            storage.currentTool = 'rectangle';
            this.currentTool = this.rect;
            this.rect.style.background = colorTools;
            break;
          case this.circle:
            storage.currentTool = 'circle';
            this.currentTool = this.circle;
            this.circle.style.background = colorTools;
            break;
          case this.dithering:
            storage.currentTool = 'dithering';
            this.currentTool = this.dithering;
            this.dithering.style.background = colorTools;
            break;
          case this.lighten:
            storage.currentTool = 'lighten';
            this.currentTool = this.lighten;
            this.lighten.style.background = colorTools;
            break;
          case this.move:
            storage.currentTool = 'move';
            this.currentTool = this.move;
            this.move.style.background = colorTools;
            break;
          case this.shape:
            storage.currentTool = 'shape';
            this.currentTool = this.shape;
            this.shape.style.background = colorTools;
            break;
          default:
            break;
        }
      }
      target = target.parentNode;
    }
    return storage.currentTool;
  }

  addTooltips(event) {
    let { target } = event;
    let res;
    while (target !== this.tools) {
      if (target.tagName === 'BUTTON') {
        target.children[1].style.display = 'flex';
        res = getComputedStyle(target.children[1]).display;
      }
      target = target.parentNode;
    }
    return res;
  }

  removeTooltips(event) {
    let { target } = event;
    let res;
    while (target !== this.tools) {
      if (target.tagName === 'BUTTON') {
        target.children[1].style.display = 'none';
        res = getComputedStyle(target.children[1]).display;
      }
      target = target.parentNode;
    }
    return res;
  }

  handleEventsTools() {
    this.tools.addEventListener('click', this.chooseTools.bind(this));
    this.tools.addEventListener('mousemove', this.addTooltips.bind(this));
    this.tools.addEventListener('mouseleave', this.removeTooltips.bind(this), true);
  }
}

export default Tools;
