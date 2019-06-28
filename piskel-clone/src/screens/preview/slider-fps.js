import storage from '../../components/storage';
import createPreviewAnimation from './preview-animation';

export default class FPS {
  constructor() {
    this.sliderFps = document.querySelector('.preview-contain__fps-block--fps-slider');
    this.valueFps = document.querySelector('.fps-value');
  }

  changeFpsValue() {
    if (this.sliderFps.value !== this.valueFps.value) {
      const { value } = this.sliderFps;
      this.valueFps.value = value;
      this.valueFps.innerHTML = value;
      storage.currentFps = value;
      createPreviewAnimation(storage.currentFps);
    }
  }

  handleSliderFPS() {
    this.sliderFps.addEventListener('mousemove', this.changeFpsValue.bind(this));
  }
}
