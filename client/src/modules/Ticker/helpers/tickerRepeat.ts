export const tickerRepeat = (str: string) => {
    return `${str} \u{25CF} ${str.toUpperCase()} \u{25CF} `.repeat(5);
};
