import storage from './storage';

function setNewDataPixels(data) {
  const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
  storage.framesData[currentNum] = storage.framesData[currentNum].map((elem, i) => {
    let element;
    if (data[i] !== null) {
      element = data[i];
    } else {
      element = elem;
    }
    return element;
  });
}

export default setNewDataPixels;
