export const isLastRow = (length: number, index: number): boolean => {
  const numberOfLasRow = length % 6;
  if (numberOfLasRow === 0) {
    return index >= length - 6;
  }
  return index >= length - numberOfLasRow;
};

export const isLastElementRow = (index: number): boolean => index % 6 === 5;
