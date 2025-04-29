const getNextTheme = (current: number, max: number) => (current % max) + 1;

export default getNextTheme;
