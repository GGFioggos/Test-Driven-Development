import { reverseString } from '../src/reverse';

describe('Reverse String', () => {
    test('reverse', () => {
        expect(reverseString('abcd')).toMatch('dcba');
    });
    test('reverse one character string', () => {
        expect(reverseString('a')).toMatch('a');
    });
});
