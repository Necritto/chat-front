export const firstLetterName = (name: string) => {
  const trimmedUpperName: string = name.trim().toUpperCase();
  const splitName = trimmedUpperName.split(" ");
  return splitName.length > 1
    ? splitName.map((i) => i[0]).join("")
    : trimmedUpperName[0];
};
