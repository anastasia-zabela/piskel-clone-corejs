import handleAddFrameButton from '../screens/frames/add-frame-button';
// import handleClickOnTools from '../screens/tools/handle-click-on-tools';
import handleSliderFPS from '../screens/preview/slider-fps';
import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import handleCanvasSizeButton from '../screens/canvas/canvas-size-button';
import handleFrameTool from '../screens/frames/handle-frame-tool';
import handleColorsChange from '../screens/colors/colors';
// import addToolsTooltips from './view-tool-tooltips';
// import handleKeyboardModalWindow from '../screens/keyboard/keyboard-shortcuts';
import Tools from '../screens/tools/tools';
import Keyboard from '../screens/keyboard/keyboard-shortcuts';

const tools = new Tools();
const keyboard = new Keyboard();

function start() {
  handleAddFrameButton();
  tools.handleEventsTools();
  handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  handleCanvasSizeButton();
  handleFrameTool(storage.frame.currentFrame);
  handleColorsChange();
  //   addToolsTooltips();
  keyboard.handleKeyboardModalWindow();
}

export default start;
