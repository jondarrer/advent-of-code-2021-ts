const part2 = (depthMeasurements: Array<number>): number => {
  return depthMeasurements.reduce((prev, cur, index, arr) => {
    if (index < arr.length - 2) {
      return prev + (arr[index + 3] > cur ? 1 : 0);
    }
    return prev;
  }, 0);
};

export default part2;
