import './index.scss';
import storage from './components/storage';
import createCanvas from './screens/canvas/canvas';
import handleClickOnTools from './screens/tools/tools';
import handleChooseColor from './screens/colors/colors';
import handleAddFrameButton from './screens/frames/add-frame-button';
import handleCopyFrameTool from './screens/frames/copy-frame-tool';
import hoverFrameTools from './components/hover-frame-tools';
import handleDeleteFrameTool from './screens/frames/delete-frame-tool';
import handleSelectFrame from './components/select-frames';
import handleSliderFPS from './screens/preview/slider-fps';
import createPreviewAnimation from './screens/preview/preview-animation';
import runFullscreenMood from './screens/preview/fullsreen-mode';

const sideCanvas = 32;
storage.canvas.sizeCanvas = sideCanvas;

createCanvas(sideCanvas);

handleAddFrameButton();
handleClickOnTools();
handleChooseColor();
handleCopyFrameTool();
hoverFrameTools();
handleDeleteFrameTool();
handleSelectFrame();
handleSliderFPS();
createPreviewAnimation(storage.currentFps);
runFullscreenMood();
