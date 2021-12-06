const part1 = (input: Array<Command>): number => {
  const [x, y] = input.reduce(
    (prev, cur) => {
      const [x1, y1] = prev;
      switch (cur.direction) {
        case 'forward':
          return [x1 + cur.quantity, y1];
        case 'up':
          return [x1, y1 - cur.quantity];
        case 'down':
          return [x1, y1 + cur.quantity];
      }
    },
    [0, 0]
  );
  return x * y;
};

export default part1;
