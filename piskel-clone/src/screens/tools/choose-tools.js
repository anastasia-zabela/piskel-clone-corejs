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
        default:
          break;
      }
      localStorage.setItem('storage', JSON.stringify(storage));
    }
    target = target.parentNode;
  }
  return storage;
}

export default chooseTools;
