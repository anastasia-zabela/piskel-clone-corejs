import './index.scss';
// import storage from './components/storage';
import Canvas from './screens/canvas/canvas';
import handleClickOnTools from './screens/tools/tools';

const canvas = new Canvas(3);

canvas.createCanvas();

handleClickOnTools();
