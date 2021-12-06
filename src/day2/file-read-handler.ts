const fileReadHandler = (accumulator: Array<Command>, line: string): void => {
  const [direction, quantity] = line.split(' ');
  accumulator.push({ direction, quantity: parseInt(quantity) });
};

export default fileReadHandler;
