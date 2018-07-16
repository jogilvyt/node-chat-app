const expect = require('expect');

const { generateMessage } = require('./message');

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