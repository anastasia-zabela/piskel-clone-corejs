import storage from '../../components/storage';
import createPreviewAnimation from './preview-animation';

const sliderFps = document.querySelector('.preview-contain__fps-block--fps-slider');
const valueFps = document.querySelector('.fps-value');

function changeFpsValue() {
  if (sliderFps.value !== valueFps.value) {
    const { value } = sliderFps;
    valueFps.value = value;
    valueFps.innerHTML = value;
    storage.currentFps = value;
    createPreviewAnimation(storage.currentFps);
  }
}

function handleSliderFPS() {
  sliderFps.addEventListener('mousemove', changeFpsValue);
}

export default handleSliderFPS;
