export const multiply = (a: number, b: number): number | Error => {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a * b;
    } else {
        throw new Error();
    }

}

export const charToUpperCase = (base: string, number: number): string | Error => {
    if (typeof base !== 'string') throw new Error();
    if (!isFinite(number) || base === null || number === null) throw new Error();
    if (base.length <= number || number < 0) throw new Error();

    let newArr: any = [];
    base.split('').map((char, idx) => {
        if ((idx + 1) % number === 0) {
            let newChar = char.toUpperCase();
            newArr.push(newChar)
        } else {
            newArr.push(char);
        }
    });
    return newArr.join("");
}

export const myFilter = (numbers: Array<number>, predicat: Function): Array<number> => {
    if(!numbers.length) throw new Error();
    if (typeof predicat !== 'function')throw new Error();
    return numbers.filter((elem) => predicat(elem));
}