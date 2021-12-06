import part2 from './part2';

describe('day2/part2', () => {
  it('should work out the result', () => {
    const input = [
      { direction: 'forward', quantity: 5 },
      { direction: 'down', quantity: 5 },
      { direction: 'forward', quantity: 8 },
      { direction: 'up', quantity: 3 },
      { direction: 'down', quantity: 8 },
      { direction: 'forward', quantity: 2 },
    ];
    expect(part2(input)).toEqual(900);
  });
});
