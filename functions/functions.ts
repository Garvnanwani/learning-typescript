// how you define types for fn in ts with return type

function addNumbers(a: number, b: number): number {
    return a + b
}
// you dont have module.exports in ts
export default addNumbers;

// arrow function in ts
// also default value is shown
export const addStrings = (str1: string, str2: string = ""): string => {
    return `${str1} ${str2}`
}


// Union types
// sometimes you want to have a variable or a function take two or more different types and unions help there

export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`
}

// void type is used when function doesnt returns something
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

// Promise type
export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`)
}


// rest parameters
export const introduce = (salutation: string, ...names: string[]): string => {
    return `${salutation} ${names.join(" ")}`
}
