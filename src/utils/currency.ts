export const toCurrency = (number: number) => {
  return number === 0 ? 0 : `${number.toLocaleString()}원`;
};
