import part2 from './part2';

describe('day1/part2', () => {
  it('should work out that there are 5 increments', () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(part2(input)).toEqual(5);
  });
});
