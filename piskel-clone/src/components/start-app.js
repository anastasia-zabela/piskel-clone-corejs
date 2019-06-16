import handleAddFrameButton from '../screens/frames/add-frame-button';
import handleClickOnTools from '../screens/tools/handle-click-on-tools';
import handleChooseColor from '../screens/colors/predefined-colors';
import handleSliderFPS from '../screens/preview/slider-fps';
import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import handleCanvasSizeButton from '../screens/canvas/canvas-size-button';
import handleFrameTool from '../screens/frames/handle-frame-tool';

function start() {
  handleAddFrameButton();
  handleClickOnTools();
  handleChooseColor();
  handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  handleCanvasSizeButton();
  handleFrameTool(storage.frame.currentFrame);
}

export default start;
