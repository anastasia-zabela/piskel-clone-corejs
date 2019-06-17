import tools from '../screens/tools/tools';

function addTooltips(e) {
  let { target } = e;
  while (target !== tools.tools) {
    if (target.tagName === 'BUTTON') {
      target.children[1].style.display = 'flex';
    }
    target = target.parentNode;
  }
}

function removeTooltips(e) {
  let { target } = e;
  while (target !== tools.tools) {
    if (target.tagName === 'BUTTON') {
      target.children[1].style.display = 'none';
    }
    target = target.parentNode;
  }
}

function addToolsTooltips() {
  tools.tools.addEventListener('mousemove', addTooltips);
  tools.tools.addEventListener('mouseleave', removeTooltips, true);
}

export default addToolsTooltips;
