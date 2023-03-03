export const average = (howMuch: number[], length: number) => {
  const sum = howMuch.reduce((sum, kill) => sum + kill, 0);
  const avg = sum / length;

  return avg;
};
