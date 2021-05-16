// basic types

let userName: string = "garv"
let hasLoggedIn: boolean = true
let myNumber: number = 15

userName += " nanwani"

console.log(userName)

// regex type
let myRegex = /foo/

// array types

const names: string[] = userName.split(" ")

const myValues: Array<number> = [1, 2, 3, 5]

// object types

const myPerson: {
    first: string
    last: string
} = {
    first: "Garv",
    last: "Nanwani",
}

// better way is to use interfaces because you dont want to declare that type again an again

interface Person {
    first: string
    last: string
}

const myPerson2: Person = {
    first: "Some first name",
    last: "Some last name"
}

// typescript provides this thing called maps which acts as a record and you can use any cobination with it
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

// conditionals in ts
// wont let you compare two different types
if (ids[30] === "c") {
}

// loops in ts
// you can specify type for i but its inferred by ts so not neccesary

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// array methods

[1, 2, 3].forEach((n) => console.log(n))

const out: number[] = [4, 5, 6].map((n) => n * 10)
