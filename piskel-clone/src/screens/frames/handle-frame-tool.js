/* eslint-disable import/no-cycle */
import deleteFrame from './delete-frame-tool';
import copyFrame from './copy-frame-tool';
import handleMoveFrameTool from './move-frame-tool';
import selectFrame from '../../components/select-frames';
import hoverFrameTools from '../../components/hover-frame-tools';

function handleFrameTool(frame) {
  frame.children[2].addEventListener('click', deleteFrame);
  frame.children[4].addEventListener('click', copyFrame);
  handleMoveFrameTool(frame);
  hoverFrameTools(frame);
  frame.addEventListener('click', selectFrame);
}

export default handleFrameTool;
