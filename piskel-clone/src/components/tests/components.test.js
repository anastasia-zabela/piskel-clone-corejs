import fullColorHex from '../rgb-to-hex';

describe('Components testing', () => {
  it('fullColorHex converting RGB to HEX color', () => {
    const r = 72;
    const g = 98;
    const b = 140;
    const hex = fullColorHex(r, g, b);

    expect(hex).toBe('48628c');
  });
});
