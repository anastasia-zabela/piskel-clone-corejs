import './index.scss';
import storage from './components/storage';
import Canvas from './screens/canvas/canvas';
import start from './components/start-app';

const sideCanvas = 32;
storage.canvas.sizeCanvas = sideCanvas;

const newCanvas = new Canvas();
newCanvas.createCanvas(sideCanvas);

start();
