import storage from '../../components/storage';
import tools from './tools';

function chooseTools(event) {
  let { target } = event;
  while (target !== tools.tools) {
    if (target.tagName === 'BUTTON') {
      if (storage.currentTool !== null) { tools.currentTool.style.background = ''; }
      const colorTools = '#acc7cd';
      switch (target) {
        case tools.pen:
          storage.currentTool = 'pen';
          tools.currentTool = tools.pen;
          tools.pen.style.background = colorTools;
          break;
        case tools.paintBucket:
          storage.currentTool = 'paintBucket';
          tools.currentTool = tools.paintBucket;
          tools.paintBucket.style.background = colorTools;
          break;
        case tools.paintSameColor:
          storage.currentTool = 'paintSameColor';
          tools.currentTool = tools.paintSameColor;
          tools.paintSameColor.style.background = colorTools;
          break;
        case tools.colorPicker:
          storage.currentTool = 'colorPicker';
          tools.currentTool = tools.colorPicker;
          tools.colorPicker.style.background = colorTools;
          break;
        case tools.eraser:
          storage.currentTool = 'eraser';
          tools.currentTool = tools.eraser;
          tools.eraser.style.background = colorTools;
          break;
        case tools.line:
          storage.currentTool = 'line';
          tools.currentTool = tools.line;
          tools.line.style.background = colorTools;
          break;
        case tools.rect:
          storage.currentTool = 'rectangle';
          tools.currentTool = tools.rect;
          tools.rect.style.background = colorTools;
          break;
        case tools.circle:
          storage.currentTool = 'circle';
          tools.currentTool = tools.circle;
          tools.circle.style.background = colorTools;
          break;
        case tools.dithering:
          storage.currentTool = 'dithering';
          tools.currentTool = tools.dithering;
          tools.dithering.style.background = colorTools;
          break;
        case tools.lighten:
          storage.currentTool = 'lighten';
          tools.currentTool = tools.lighten;
          tools.lighten.style.background = colorTools;
          break;
        default:
          break;
      }
    }
    target = target.parentNode;
  }
}

export default chooseTools;
