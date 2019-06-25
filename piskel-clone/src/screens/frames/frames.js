class Frame {
  constructor(numData, numOfFrame) {
    this.frameCopy = document.querySelector('.frames-contain__wrapper-frame');
    this.frameContain = this.frameCopy.cloneNode(true);
    [this.frameCanvas, this.numFrameTool] = this.frameContain.children;
    this.numDataOfFrame = numData;
    this.numFrameTool.innerHTML = numOfFrame;
  }
}

export default Frame;
