import handleAddFrameButton from '../screens/frames/add-frame-button';
// import handleClickOnTools from '../screens/tools/handle-click-on-tools';
import handleSliderFPS from '../screens/preview/slider-fps';
import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import handleCanvasSizeButton from '../screens/canvas/canvas-size-button';
import handleFrameTool from '../screens/frames/handle-frame-tool';
import handleColorsChange from '../screens/colors/colors';
import Tools from '../screens/tools/tools';
import Keyboard from '../screens/keyboard/keyboard-shortcuts';
import Export from '../screens/export/export';

const tools = new Tools();
const keyboard = new Keyboard();
const exp = new Export();

function start() {
  handleAddFrameButton();
  tools.handleEventsTools();
  handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  handleCanvasSizeButton();
  handleFrameTool(storage.frame.currentFrame);
  handleColorsChange();
  keyboard.handleKeyboardModalWindow();
  exp.handleExports();
}

export default start;
