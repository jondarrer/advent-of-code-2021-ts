import fileReadHandler from './file-read-handler';

describe('day2/file-read-handler', () => {
  it('should read in strings and convert them to commands', () => {
    const lines = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2',
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      { direction: 'forward', quantity: 5 },
      { direction: 'down', quantity: 5 },
      { direction: 'forward', quantity: 8 },
      { direction: 'up', quantity: 3 },
      { direction: 'down', quantity: 8 },
      { direction: 'forward', quantity: 2 },
    ]);
  });
});
