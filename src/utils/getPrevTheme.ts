const getPrevTheme = (current: number, max: number) =>
  ((current - 2 + max) % max) + 1;

export default getPrevTheme;
