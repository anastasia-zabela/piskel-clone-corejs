import GIF from '../../gif';
import storage from '../../components/storage';

// const preview = document.querySelector('.preview-contain__preview');

export default class Export {
  constructor() {
    this.exportToGIFButton = document.querySelector('.export-contain__gif');
    this.exportToGoogleDriveButton = document.querySelector('.google-drive');
    this.renderExportToDrive = document.querySelector('#render-export-to-gd');
    this.googleButton = document.querySelector('.g-savetodrive');
  }

  static exportToGif() {
    const gif = new GIF({
      workers: 2,
      quality: 10,
      background: '#e1e6e2',
      transparent: 'transparent',
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
      const urlImg = URL.createObjectURL(blob);
      link.setAttribute('href', urlImg);
      link.setAttribute('download', 'download');
      link.click();
    }

    gif.on('finished', f);

    gif.render();
  }

  exportToGD() {
    const urlImg = Export.exportToGif();
    this.googleButton.setAttribute('data-src', urlImg);
  }

  static renderSaveToDrive() {
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

    // eslint-disable-next-line no-undef
    gapi.savetodrive.go('savetodrive-div');

    function f(blob) {
      let urlImg = URL.createObjectURL(blob);
      urlImg = urlImg.slice(5);
      // eslint-disable-next-line no-undef
      gapi.savetodrive.render('savetodrive-div', {
        src: `${urlImg}`,
        filename: 'My Statement.pdf',
        sitename: 'My Company Name',
      });
    }

    gif.on('finished', f);

    gif.render();
  }

  handleExports() {
    this.exportToGIFButton.addEventListener('click', Export.exportToGif);
    // this.renderExportToDrive.addEventListener('click', Export.renderSaveToDrive);
    // this.googleButton.addEventListener('click', this.exportToGD.bind(this));
  }
}
