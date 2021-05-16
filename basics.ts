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
