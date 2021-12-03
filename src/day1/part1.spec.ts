import part1 from './part1';

describe('day1/part1', () => {
  it('should work out that there are 7 increments', () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(part1(input)).toEqual(7);
  });
});
