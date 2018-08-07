const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Jack';
    const text = 'This is the test message';
    const message = generateMessage(from, text);

    expect(message).toInclude({
      from,
      text
    });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Jack';
    const latitude = 1;
    const longitude = 2;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
    expect(message.createdAt).toBeA('number');
  });
});