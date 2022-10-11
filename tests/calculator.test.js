import { calculator } from '../src/calculator';

describe('Calculator', () => {
    test('addition', () => {
        expect(calculator.addition(1, 3)).toEqual(4);
    });
    test('substraction', () => {
        expect(calculator.subtraction(5, 2)).toEqual(3);
    });
    test('multiplication', () => {
        expect(calculator.multiplication(3, 6)).toEqual(18);
    });
    test('division', () => {
        expect(calculator.division(6, 2)).toEqual(3);
    });
    test('division', () => {
        expect(calculator.division(5, 2)).toEqual(2.5);
    });
    test('division', () => {
        expect(calculator.division(4, 0)).toBeNull();
    });
});
