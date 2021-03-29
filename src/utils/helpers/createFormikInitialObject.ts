export function createFormikInitialObject<T>(...rest: (keyof T)[]) {
  const result = {} as Record<keyof T, string>;
  rest.forEach((item) => (result[item] = ""));
  return result;
}
