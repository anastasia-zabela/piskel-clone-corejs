import storage from '../../components/storage';
import deleteFrame from './delete-frame-tool';

function handleDeleteFrameTool() {
  storage.frame.currentFrame.children[2].addEventListener('click', deleteFrame);
}

export default handleDeleteFrameTool;
