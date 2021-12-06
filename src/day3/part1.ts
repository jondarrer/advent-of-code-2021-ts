const part1 = (input: Array<string>): number => {
  let gammaRate = '';
  let epsilonRate = '';
  for (let i = 0; i < input[0].length; i++) {
    const gamma = hasMostOf(input, i);
    const epsilon = gamma === 1 ? 0 : 1;
    gammaRate = `${gammaRate}${gamma}`;
    epsilonRate = `${epsilonRate}${epsilon}`;
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

const hasMostOf = (input: Array<string>, pos: number): number => {
  const count = input.reduce(
    (prev, cur) => prev + parseInt(cur.charAt(pos)),
    0
  );
  return count > input.length / 2 ? 1 : 0;
};

export default part1;
export { hasMostOf };
