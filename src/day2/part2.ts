const part2 = (input: Array<Command>): number => {
  const [x, y] = input.reduce(
    (prev, cur) => {
      const [x1, y1, aim1] = prev;
      switch (cur.direction) {
        case 'forward':
          return [x1 + cur.quantity, y1 + cur.quantity * aim1, aim1];
        case 'up':
          return [x1, y1, aim1 - cur.quantity];
        case 'down':
          return [x1, y1, aim1 + cur.quantity];
      }
    },
    [0, 0, 0]
  );
  return x * y;
};

const somethingElse = (arg: number): number => 0;

export default part2;
export { somethingElse };
