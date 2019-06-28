import createPreviewAnimation from '../screens/preview/preview-animation';
import handleFullscreenMode from '../screens/preview/fullsreen-mode';
import storage from './storage';
import Tools from '../screens/tools/tools';
import Keyboard from '../screens/keyboard/keyboard-shortcuts';
import Export from '../screens/export/export';
import FrameTools from '../screens/frames/frame-tools';
import Colors from '../screens/colors/colors';
import Authorization from '../screens/authorization/auth';
import Landing from '../screens/landing-page/landing';
import UserSession from '../screens/user-session/user-local-storage';
import FPS from '../screens/preview/slider-fps';
import CanvasSize from '../screens/canvas/canvas-size-button';

const tools = new Tools();
const keyboard = new Keyboard();
const frameTools = new FrameTools();
const exp = new Export();
const colors = new Colors();
const auth = new Authorization();
const landing = new Landing();
const session = new UserSession();
const sliderFps = new FPS();
const canvasSize = new CanvasSize();

function checkLocalStorage() {
  if (localStorage.getItem('storage')) {
    session.loadSession();
  } else {
    landing.landingPage.style.display = 'block';
  }
}

function start() {
  frameTools.handleAddFrameButton();
  tools.handleEventsTools();
  sliderFps.handleSliderFPS();
  createPreviewAnimation(storage.currentFps);
  handleFullscreenMode();
  canvasSize.handleCanvasSizeButton();
  frameTools.handleFrameTool(storage.frame.currentFrame);
  colors.handleColorsChange();
  keyboard.handleKeyboardModalWindow();
  exp.handleExports();
  auth.handleSingInButton();
  landing.loadImage();
  landing.handleCreateSpriteButton();
  session.handleClickSaveButton();
  checkLocalStorage();
}

export default start;
