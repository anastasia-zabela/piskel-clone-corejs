import handleAddFrameButton from '../screens/frames/add-frame-button';
import handleClickOnTools from '../screens/tools/handle-click-on-tools';
import handleChooseColor from '../screens/colors/colors';
import handleCopyFrameTool from '../screens/frames/copy-frame-tool';
import hoverFrameTools from './hover-frame-tools';
import handleDeleteFrameTool from '../screens/frames/handle-delete-frame-tool';
import handleSelectFrame from './select-frames';
import handleSliderFPS from '../screens/preview/slider-fps';
import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import handleCanvasSizeButton from '../screens/canvas/canvas-size-button';

function start() {
  handleAddFrameButton();
  handleClickOnTools();
  handleChooseColor();
  handleCopyFrameTool();
  hoverFrameTools();
  handleDeleteFrameTool();
  handleSelectFrame();
  handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  handleCanvasSizeButton();
}

export default start;
