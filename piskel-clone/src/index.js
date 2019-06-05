import './index.scss';
// import storage from './components/storage';
import createCanvas from './screens/canvas/canvas';
import handleClickOnTools from './screens/tools/tools';
import handleChooseColor from './screens/colors/colors';

const sideCanvas = 32;

createCanvas(sideCanvas);

handleClickOnTools();
handleChooseColor();
