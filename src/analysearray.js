const analyseArray = {
    average: (arr) => {
        let sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    },
    min: (arr) => Math.min(...arr),
    max: (arr) => Math.max(...arr),
    length: (arr) => arr.length,
};

export { analyseArray };
