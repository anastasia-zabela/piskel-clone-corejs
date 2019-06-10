const preview = document.querySelector('.preview-contain__preview');
const fullscreenButton = document.querySelector('.preview-contain__fullscreen');

function runFullscreenMode() {
  preview.requestFullscreen();
  preview.height = window.outerHeight;
  preview.width = preview.height;
}

function handleFullscreenMode() {
  fullscreenButton.addEventListener('click', runFullscreenMode);
}

export default handleFullscreenMode;
