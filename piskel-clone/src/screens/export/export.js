import GIF from '../../gif';
import storage from '../../components/storage';

// const preview = document.querySelector('.preview-contain__preview');

export default class Export {
  constructor() {
    this.exportToGIFButton = document.querySelector('.export-contain__gif');
  }

  static exportToGif() {
    const gif = new GIF({
      workers: 2,
      quality: 10,
      background: '#e1e6e2',
    });
    window.console.log(gif, this.exportToGIFButton);
    const ms = 1000 / storage.currentFps;

    let frames = document.getElementsByClassName('frames-contain__frame');
    frames = Array.prototype.slice.call(frames);
    frames.forEach((elem) => {
      gif.addFrame(elem, { delay: ms });
    });

    function f(blob) {
      const link = document.createElement('a');
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', 'download');
      link.click();
    }

    gif.on('finished', f);

    gif.render();
  }

  handleExports() {
    this.exportToGIFButton.addEventListener('click', Export.exportToGif);
  }
}
