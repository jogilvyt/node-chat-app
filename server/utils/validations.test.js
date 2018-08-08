const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const num = 234;
    const bool = true;

    expect(isRealString(num)).toBe(false);
    expect(isRealString(bool)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const emptyStr = '     ';
    expect(isRealString(emptyStr)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const str = 'This is a string';
    expect(isRealString(str)).toBe(true);
  });
});