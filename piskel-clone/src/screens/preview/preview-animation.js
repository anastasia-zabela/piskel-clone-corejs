import storage from '../../components/storage';

const preview = document.querySelector('.preview-contain__preview');
const ctxPreview = preview.getContext('2d');
const sliderFps = document.querySelector('.preview-contain__fps-block--fps-slider');

async function createPreviewAnimation(fps) {
  const ms = 1000 / fps;
  let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
  frames = Array.prototype.slice.call(frames);
  let indexFrame = 0;

  const frameOfAnimation = new Promise((resolve, reject) => {
    if (+fps !== 0) {
      resolve();
    } else if (+fps === 0) {
      reject();
    }
  });

  function animationFrames() {
    frameOfAnimation
      .then(() => {
        ctxPreview.clearRect(0, 0, preview.width, preview.height);
        ctxPreview.imageSmoothingEnabled = false;
        ctxPreview.drawImage(frames[indexFrame].children[0], 0, 0, preview.width, preview.height);
        indexFrame += 1;
        if (indexFrame === frames.length) {
          indexFrame = 0;
        }
      })
      .catch(() => {
        ctxPreview.clearRect(0, 0, preview.width, preview.height);
        ctxPreview.drawImage(storage.canvas.canvasElement, 0, 0, preview.width, preview.height);
      });
    const newFrames = document.getElementsByClassName('frames-contain__wrapper-frame');
    if (frames.length === newFrames.length && fps === sliderFps.value) {
      setTimeout(animationFrames, ms);
    }
  }

  await animationFrames();
}

export default createPreviewAnimation;
