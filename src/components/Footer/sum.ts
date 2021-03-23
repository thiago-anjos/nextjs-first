type Props = {
  a: number;
  b: number;
};

function sum({ a, b }: Props): number {
  return a + b;
}

export default sum;
