import addNumbers, { addStrings, getNames } from "./functions";

console.log(addNumbers(1, 2))
// console.log(addNumbers(1,"garv")) wont work
console.log(addStrings("a", 'b'))
console.log(addStrings("a"))

console.log(getNames({ first: "garv", last: "nanwani" }))
