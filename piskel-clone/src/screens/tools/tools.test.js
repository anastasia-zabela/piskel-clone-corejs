import chooseTools from './choose-tools';
import storage from '../../components/storage';

describe('Tools', () => {
  it('Choose current tool by click on tools-contain', () => {
    // class Tools {
    //   constructor() {
    //     this.tools = document.querySelector('.tools');
    //     this.pen = document.querySelector('.tools__pen-tool');
    //     this.currentTool = null;
    //   }
    // }
    // const tools = new Tools();
    class Event {
      constructor() {
        this.targetElement = document.querySelector('.tools__pen-tool');
      }
    }
    const event = new Event();
    chooseTools(event);
    expect(storage.currentTool).toBe('pen');
  });
});
