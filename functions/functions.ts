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


// IMP
// TS inforces types at compile time and not run time so keep that in mind

// so if this code gets compiled and used in javascript, and lets say you dont pass first and last, you will get run time error which we dont want

export const getNames = (user: { first: string, last: string }): string => {
    return `${user.first} ${user.last}`
}

//  better way is to do optional chaining ( ?. ) and check if user exists before using its properties

// will return undefined if first, last not defined instead of run time error

export const betterGetNames = (user: { first: string, last: string }): string => {
    return `${user?.first} ${user?.last}`
}

// can make it even better with null coalescing operator ( ?? ) that wont return undefined but a default

export const betterGetNames2 = (user: { first: string, last: string }): string => {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}
