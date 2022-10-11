import { analyseArray } from '../src/analysearray';

describe('Analyse Array', function () {
    test('average', function () {
        expect(analyseArray.average([1, 8, 3, 4, 2, 6])).toEqual(4);
    });
    test('min', function () {
        expect(analyseArray.min([1, 8, 3, 4, 2, 6])).toEqual(1);
    });
    test('max', function () {
        expect(analyseArray.max([1, 8, 3, 4, 2, 6])).toEqual(8);
    });
    test('length', function () {
        expect(analyseArray.length([1, 8, 3, 4, 2, 6])).toEqual(6);
    });
});
