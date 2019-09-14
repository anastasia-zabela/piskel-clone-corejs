import storage from '../../components/storage';
import Landing from '../landing-page/landing';
import Tools from '../tools/tools';
import Colors from '../colors/colors';
import Canvas from '../canvas/canvas';
import FrameTools from '../frames/frame-tools';
import drawCanvas from '../../components/draw-canvas';
import FPS from '../preview/slider-fps';
import CanvasSize from '../canvas/canvas-size-button';

export default class UserSession {
  constructor() {
    this.saveButton = document.querySelector('#save');
    this.deleteButton = document.querySelector('#delete');
    this.message = document.querySelector('.session-message');
    this.store = null;
    this.tool = new Tools();
    this.colors = new Colors();
    this.canvas = new Canvas();
    this.landing = new Landing();
    this.frameTools = new FrameTools();
    this.sliderFps = new FPS();
    this.canvasSize = new CanvasSize();
  }

  saveSession() {
    localStorage.setItem('storage', JSON.stringify(storage));
    this.store = JSON.parse(localStorage.getItem('storage'));
    const messText = 'Current session saved';
    this.showMessage(messText);
  }

  static closeMessage() {
    const mess = document.querySelector('.session-message');
    mess.style.display = 'none';
  }

  showMessage(text) {
    this.message.innerHTML = text;
    this.message.style.display = 'flex';
    setTimeout(UserSession.closeMessage, 3000);
  }

  deleteCurrentTool() {
    if (this.store.currentTool) {
      this.tool[storage.currentTool].style.background = '';
      this.tool.currentTool = null;
      storage.currentTool = null;
    }
  }

  deleteColors() {
    this.colors.primaryColorField.value = '#acc7cd';
    this.colors.secondaryColorField.value = '#e1e6e2';
    storage.colors.primaryColor = '#acc7cd';
    storage.colors.secondaryColor = '#e1e6e2';
  }

  deleteFrames() {
    storage.canvas.sizeCanvas = 32;

    const arraySizeButton = Array.prototype.slice.call(this.canvas.canvasSizeButtons.children);
    const currentSizeButton = arraySizeButton.find(elem => +elem.innerText
        === this.store.canvas.sizeCanvas);
    const event = {
      target: currentSizeButton,
    };
    CanvasSize.changeCanvasSize(event);
  }

  deleteFps() {
    this.sliderFps.sliderFps.value = 0;
    this.sliderFps.changeFpsValue();
  }

  deleteSession() {
    if (this.store) {
      const messText = 'Current session deleted';
      localStorage.clear();

      this.deleteCurrentTool();
      this.deleteColors();
      this.deleteFrames();
      this.deleteFps();
      this.showMessage(messText);
    }

    window.console.log(storage);
    window.console.log(this.store);
  }

  loadDisplay() {
    this.landing.piskelApp.style.display = this.store.display.app;
    this.landing.landingPage.style.display = this.store.display.landing;
    storage.display.app = this.store.display.app;
    storage.display.landing = this.store.display.landing;
  }

  loadCurrentTool() {
    if (this.store.currentTool) {
      this.tool.currentTool = this.tool[this.store.currentTool];
      this.tool.currentTool.style.background = this.tool.colorTools;
      storage.currentTool = this.store.currentTool;
    }
  }

  loadCurrentColor() {
    this.colors.primaryColorField.value = this.store.colors.primaryColor;
    this.colors.secondaryColorField.value = this.store.colors.secondaryColor;
    storage.colors.primaryColor = this.store.colors.primaryColor;
    storage.colors.secondaryColor = this.store.colors.secondaryColor;
  }

  loadCanvasSize() {
    storage.canvas.sizeCanvas = this.store.canvas.sizeCanvas;

    const arraySizeButton = Array.prototype.slice.call(this.canvas.canvasSizeButtons.children);
    const currentSizeButton = arraySizeButton.find(elem => +elem.innerText
        === this.store.canvas.sizeCanvas);
    const event = {
      target: currentSizeButton,
    };
    CanvasSize.changeCanvasSize(event);
  }

  loadFrames() {
    this.store.framesData.forEach((elem, i) => {
      if (i > 0) {
        this.frameTools.addNewFrame();
      }
      this.canvas.createCanvas(storage.canvas.sizeCanvas);
      this.store.framesData[i].map(el => drawCanvas(el));

      const { currentFrame } = storage.frame;
      const ctxFrame = currentFrame.children[0].getContext('2d');
      ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, currentFrame.clientWidth,
        currentFrame.clientHeight);
    });

    this.store.framesData.forEach((elem, ind) => {
      storage.framesData[ind] = new Array(storage.canvas.sizeCanvas
              * storage.canvas.sizeCanvas).fill(null).map((e, i) => {
        const element = this.store.framesData[ind][i];
        return element;
      });
    });

    const frames = document.getElementsByClassName('frames-contain__wrapper-frame');
    const eventSelect = {
      target: frames[this.store.frame.numCurrentFrame].children[0],
    };
    this.frameTools.selectFrame(eventSelect);
  }

  loadCurrentFps() {
    this.sliderFps.sliderFps.value = this.store.currentFps;
    this.sliderFps.changeFpsValue();
  }

  loadSession() {
    this.store = JSON.parse(localStorage.getItem('storage'));

    this.loadDisplay();
    this.loadCurrentTool();
    this.loadCurrentColor();
    this.loadCanvasSize();
    this.loadFrames();
    this.loadCurrentFps();

    window.console.log(storage);
    window.console.log(this.store);
  }

  handleKeyDownSession(e) {
    const key = e.code;
    switch (key) {
      case 'KeyS':
        if (e.shiftKey) {
          this.saveSession();
        }
        break;
      case 'KeyD':
        if (e.shiftKey) {
          this.deleteSession();
        }
        break;
      default:
        break;
    }
  }

  handleClickSaveButton() {
    this.saveButton.addEventListener('click', this.saveSession.bind(this));
    this.deleteButton.addEventListener('click', this.deleteSession.bind(this));
    document.addEventListener('keydown', this.handleKeyDownSession.bind(this));
  }
}
