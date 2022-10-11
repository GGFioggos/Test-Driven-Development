import { capitalise } from '../src/capitalise';

describe('capitalise', () => {
    test('Capital', () => {
        expect(capitalise('test')).toMatch('Test');
    });
    test('Capital', () => {
        expect(capitalise('Test')).toMatch('Test');
    });
});
