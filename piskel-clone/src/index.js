import './index.scss';
import storage from './components/storage';
import createCanvas from './screens/canvas/canvas';
import start from './components/start-app';

const sideCanvas = 32;
storage.canvas.sizeCanvas = sideCanvas;

createCanvas(sideCanvas);

start();
