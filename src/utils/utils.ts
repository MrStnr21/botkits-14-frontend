/* eslint-disable import/prefer-default-export */

// Принимает размер файла в байтах и возвращает округленный до десятых результат в B, KB, MB
export const sizeFormated = (byte: number) => {
  if (byte < 1024) {
    return `${String(Math.round(byte * 10) / 10)}B`;
  }
  const result = Math.round(byte / 1024);
  if (result > 1024) {
    return `${String(Math.round((result / 1024) * 10) / 10)}MB`;
  }
  return `${String(Math.round(result * 10) / 10)}KB`;
};
