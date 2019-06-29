import storage from '../../components/storage';
import createPreviewAnimation from './preview-animation';
import Background from '../../assets/background-canvas.jpg';

export default class FPS {
  constructor() {
    this.preview = document.querySelector('.preview-contain__preview');
    this.sliderFps = document.querySelector('.preview-contain__fps-block--fps-slider');
    this.valueFps = document.querySelector('.fps-value');
  }

  addBackgroundPreview() {
    this.preview.style.background = `url(${Background})`;
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

  decreaseValueFps() {
    const currentFps = this.sliderFps.value;
    if (currentFps > 0) {
      this.sliderFps.value = currentFps - 1;
      this.changeFpsValue();
    }
  }

  increaseValueFps() {
    const currentFps = this.sliderFps.value;
    if (currentFps < 24) {
      this.sliderFps.value = +currentFps + 1;
      this.changeFpsValue();
    }
  }

  handleKeyChangeFps(e) {
    const { code } = e;
    switch (code) {
      case 'KeyQ':
        this.decreaseValueFps();
        break;
      case 'KeyW':
        this.increaseValueFps();
        break;
      default:
        break;
    }
  }

  handleSliderFPS() {
    this.sliderFps.addEventListener('mousemove', this.changeFpsValue.bind(this));
    document.addEventListener('keydown', this.handleKeyChangeFps.bind(this));
  }
}
