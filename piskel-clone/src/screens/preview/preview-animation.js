import storage from '../../components/storage';

const preview = document.querySelector('.preview-contain__preview');
const ctxPreview = preview.getContext('2d');
const sliderFps = document.querySelector('.preview-contain__fps-block--fps-slider');

function createPreviewAnimation(fps) {
  const ms = 1000 / fps;
  let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
  frames = Array.prototype.slice.call(frames);
  const diff = storage.canvas.canvasElement.width / preview.width;
  let indexFrame = 0;

  function animationFrames() {
    const newFrames = document.getElementsByClassName('frames-contain__wrapper-frame');
    if (frames.length === newFrames.length && fps === sliderFps.value) {
      ctxPreview.clearRect(0, 0, preview.width, preview.height);
      storage.framesData[indexFrame].forEach((elem) => {
        if (elem !== null) {
          const color = elem[3];
          ctxPreview.fillStyle = color;
          ctxPreview.fillRect(elem[0] / diff, elem[1] / diff, elem[2] / diff, elem[2] / diff);
        }
      });
      indexFrame += 1;
      if (indexFrame === frames.length) {
        indexFrame = 0;
      }
      setTimeout(animationFrames, ms);
    }
  }

  animationFrames();
}

export default createPreviewAnimation;
