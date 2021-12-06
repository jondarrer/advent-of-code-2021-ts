import part1, { hasMostOf } from './part1';

describe('day3/part1', () => {
  it('should work out the result', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    expect(part1(input)).toEqual(198);
  });
});

describe('day3/hasMostOf', () => {
  it('should work out the result', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    expect(hasMostOf(input, 0)).toEqual(1);
    expect(hasMostOf(input, 1)).toEqual(0);
    expect(hasMostOf(input, 2)).toEqual(1);
    expect(hasMostOf(input, 3)).toEqual(1);
    expect(hasMostOf(input, 4)).toEqual(0);
  });
});
