import part1 from './part1';

describe('day2/part1', () => {
  it('should work out the result', () => {
    const input = [
      { direction: 'forward', quantity: 5 },
      { direction: 'down', quantity: 5 },
      { direction: 'forward', quantity: 8 },
      { direction: 'up', quantity: 3 },
      { direction: 'down', quantity: 8 },
      { direction: 'forward', quantity: 2 },
    ];
    expect(part1(input)).toEqual(150);
  });
});
