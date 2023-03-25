export const createId = (prevKey: string, index: any, depth: number) => {
  const dash = prevKey == "" ? "" : "-";
  return `${prevKey}${dash}${index}`
};
