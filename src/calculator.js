const calculator = {
    addition: (num1, num2) => num1 + num2,
    subtraction: (num1, num2) => num1 - num2,
    division: (num1, num2) => {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            return null;
        }
    },
    multiplication: (num1, num2) => num1 * num2,
};

export { calculator };
