import handleSliderFPS from '../screens/preview/slider-fps';
import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import handleCanvasSizeButton from '../screens/canvas/canvas-size-button';
import Tools from '../screens/tools/tools';
import Keyboard from '../screens/keyboard/keyboard-shortcuts';
import Export from '../screens/export/export';
import FrameTools from '../screens/frames/frame-tools';
import Colors from '../screens/colors/colors';

const tools = new Tools();
const keyboard = new Keyboard();
const frameTools = new FrameTools();
const exp = new Export();
const colors = new Colors();

function start() {
  frameTools.handleAddFrameButton();
  tools.handleEventsTools();
  handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  handleCanvasSizeButton();
  frameTools.handleFrameTool(storage.frame.currentFrame);
  colors.handleColorsChange();
  keyboard.handleKeyboardModalWindow();
  exp.handleExports();
}

export default start;
