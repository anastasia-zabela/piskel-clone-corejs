import './index.scss';
import storage from './components/storage';
import createCanvas from './screens/canvas/canvas';
import handleClickOnTools from './screens/tools/tools';
import handleChooseColor from './screens/colors/colors';
import handleAddFrameButton from './screens/frames/add-frame-button';

const sideCanvas = 32;
storage.canvas.sizeCanvas = sideCanvas;

createCanvas(sideCanvas);

handleAddFrameButton();
handleClickOnTools();
handleChooseColor();
