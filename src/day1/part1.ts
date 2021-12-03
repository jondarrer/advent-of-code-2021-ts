const part1 = (depthMeasurements: Array<number>): number => {
  return depthMeasurements.reduce(
    (prev, cur, index, arr) => prev + (arr[index + 1] > cur ? 1 : 0),
    0
  );
};

export default part1;
