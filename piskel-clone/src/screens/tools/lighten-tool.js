import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';

let ligh = false;

function rgbToHsl(data) {
  let [r, g, b] = data;
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}

function hslToRgb(h, s, l) {
  const s1 = s / 100;
  const l1 = l / 100;
  const c = (1 - Math.abs(2 * l1 - 1)) * s1;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l1 - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function getNewLightenColor(imgData) {
  const [h, s, l] = rgbToHsl(imgData.data);
  let l1 = l + 1;
  if (l1 > 100) {
    l1 = 100;
  }
  const color = hslToRgb(h, s, l1);
  return color;
}

function getLighten(e) {
  if (ligh) {
    const { canvasElement, sizeRect } = storage.canvas;
    const { currentFrame } = storage.frame;
    const ctx = canvasElement.getContext('2d');
    const ctxFrame = currentFrame.children[0].getContext('2d');
    for (let h = 0; h < canvasElement.width; h += sizeRect) {
      for (let v = 0; v < canvasElement.height; v += sizeRect) {
        if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
          const imgData = ctx.getImageData(h, v, 1, 1);
          if (imgData.data[3] !== 0) {
            const newColor = getNewLightenColor(imgData);
            ctx.fillStyle = newColor;
            ctx.fillRect(h, v, sizeRect, sizeRect);
            ctxFrame.drawImage(canvasElement, 0, 0, 150, 150);
            setFramesData(h, v, newColor);
          }
        }
      }
    }
  }
}

function handleMouseDown(e) {
  if (storage.currentTool === 'lighten') {
    ligh = true;
    getLighten(e);
  }
}

function handleMouseMove(e) {
  getLighten(e);
}

function handleMouseUp() {
  if (storage.currentTool === 'lighten') {
    ligh = false;
  }
}

function addLightenTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addLightenTool;
