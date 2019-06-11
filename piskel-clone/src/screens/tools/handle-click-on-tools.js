import tools from './tools';
import chooseTools from './choose-tools';

function handleClickOnTools() {
  tools.tools.addEventListener('click', chooseTools);
}

export default handleClickOnTools;
