function getHoverTool() {
  const tools = [this.children[2], this.children[3], this.children[4]];
  tools.map(elem => elem.classList.add('visible'));
}

function stopHoverTool() {
  const tools = [this.children[2], this.children[3], this.children[4]];
  tools.map(elem => elem.classList.remove('visible'));
}

function hoverFrameTools(frame) {
  frame.addEventListener('mousemove', getHoverTool);
  frame.addEventListener('mouseleave', stopHoverTool);
}

export default hoverFrameTools;
