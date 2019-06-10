function changeNum(e, i) {
  e.children[1].innerHTML = i + 1;
  e.setAttribute('data-num-frame', i);
}

function changeNumOfFrames() {
  let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
  frames = Array.prototype.slice.call(frames);

  frames.map((elem, i) => changeNum(elem, i));
}

export default changeNumOfFrames;
