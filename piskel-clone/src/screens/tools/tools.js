import storage from '../../components/storage';

class Tools {
  constructor() {
    this.tools = document.querySelector('.tools');
    this.pen = document.querySelector('.tools__pen-tool');
    this.paintBucket = document.querySelector('.tools__paint-bucket-tool');
    this.eraser = document.querySelector('.tools__eraser-tool');
    this.currentTool = null;
  }
}

const tools = new Tools();

function chooseTools(event) {
  let { target } = event;
  while (target !== tools.tools) {
    if (target.tagName === 'BUTTON') {
      if (storage.currentTool !== null) { tools.currentTool.style.background = ''; }
      switch (target) {
        case tools.pen:
          storage.currentTool = 'pen';
          tools.currentTool = tools.pen;
          tools.pen.style.background = '#eee';
          break;
        case tools.paintBucket:
          storage.currentTool = 'paintBucket';
          tools.currentTool = tools.paintBucket;
          tools.paintBucket.style.background = '#eee';
          break;
        case tools.eraser:
          storage.currentTool = 'eraser';
          tools.currentTool = tools.eraser;
          tools.eraser.style.background = '#eee';
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

function handleClickOnTools() {
  tools.tools.addEventListener('click', chooseTools);
}

export default handleClickOnTools;
