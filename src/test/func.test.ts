import {charToUpperCase, myFilter} from './func';

/*
describe('simple test', () => {
    it('should return valid value', () => {
        expect(multiply(3, 4)).toEqual(12);
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(3, 0)).toEqual(0);
    })

    it('should return undefined', () => {
        // @ts-ignore
        expect(() => multiply(undefined, undefined)).toThrowError();
    })

    it('should return NaN', () => {
        expect(() => multiply(5, NaN)).toThrowError();
    })
});
*/

/*
const testString = 'shouldreturnstring';

describe('charToUppercase', () => {
    test('should return valid value with 2', () => {
        const res = 'sHoUlDrEtUrNsTrInG';
        expect(charToUpperCase(testString, 2)).toEqual(res);
    })

    test('should throw error when num or base invalid', () => {
        // @ts-ignore
        expect(() => charToUpperCase(undefined, 4)).toThrowError()
        // @ts-ignore
        expect(() => charToUpperCase(null, NaN)).toThrowError()
        expect(() => charToUpperCase(testString, -45)).toThrowError()
    })

    test('should throw error when num < 0 or base.length too small', () => {
        expect(() => charToUpperCase("", 2)).toThrowError()
        expect(() => charToUpperCase(testString, -45)).toThrowError()
    })

});*/

describe('My filter', () => {
    it('Should return valid data structure', () => {
        const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(myFilter(testArray, (num: number): boolean => !(num % 3))).toEqual([3, 6, 9]);
        expect(myFilter(testArray, (num: number): boolean => !(num % 4))).toEqual([4, 8]);
    })

    it('Should return valid data structure', () => {
        expect(() => myFilter([], (num: number): boolean => !(num % 3))).toThrowError();
    })

    it('Should return valid data structure', () => {
        // @ts-ignore
        expect(() => myFilter([], null)).toThrowError();
    })
})
