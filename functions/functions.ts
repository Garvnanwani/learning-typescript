// how you define types for fn in ts with return type

function addNumbers(a: number, b: number): number {
    return a + b
}

// arrow function in ts
export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`


// you dont have module.exports in ts
export default addNumbers;
