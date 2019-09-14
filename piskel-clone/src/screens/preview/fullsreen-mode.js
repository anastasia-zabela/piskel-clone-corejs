const preview = document.querySelector('.preview-contain__preview');
const fullscreenButton = document.querySelector('.preview-contain__fullscreen');

function runFullscreenMode() {
  preview.requestFullscreen();
  preview.height = window.outerHeight;
  preview.width = preview.height;
}

function handleKeyFullscreen(e) {
  const { code } = e;
  switch (code) {
    case 'KeyF':
      runFullscreenMode();
      break;
    default:
      break;
  }
}

function handleFullscreenMode() {
  fullscreenButton.addEventListener('click', runFullscreenMode);
  document.addEventListener('keydown', handleKeyFullscreen);
}

export default handleFullscreenMode;
