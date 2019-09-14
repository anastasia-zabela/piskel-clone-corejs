import Tools from '../tools';

describe('Tools', () => {
  it('chooseTools should change current tool', () => {
    document.body.innerHTML = '<div class="tools">'
    + '<button class="tools__pen-tool"></button>'
    + '</div>';
    const event = {
      target: document.querySelector('.tools__pen-tool'),
    };
    const tools = new Tools();

    const result = tools.chooseTools(event);
    expect(result).toBe('pen');
  });

  it('addTooltips change display tooltips to flex', () => {
    document.body.innerHTML = '<button class="tools__paint-bucket-tool">'
    + '<span class="fas fa-fill-drip"></span>'
    + '<div>Paint bucket tool (B)</div>'
    + '</button>';
    const event = {
      target: document.querySelector('.tools__paint-bucket-tool'),
    };
    const tools = new Tools();

    const result = tools.addTooltips(event);
    expect(result).toBe('flex');
  });

  it('removeTooltips change display tooltips to none', () => {
    document.body.innerHTML = '<button class="tools__paint-bucket-tool">'
    + '<span class="fas fa-fill-drip"></span>'
    + '<div>Paint bucket tool (B)</div>'
    + '</button>';
    const event = {
      target: document.querySelector('.tools__paint-bucket-tool'),
    };
    const tools = new Tools();

    const result = tools.removeTooltips(event);
    expect(result).toBe('none');
  });
});
