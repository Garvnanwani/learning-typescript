const { getNames, betterGetNames, betterGetNames2 } = require('./functions')

// you can pass any type here and no type checking will be done in javascript code
console.log(getNames({ first: 'a', last: 'b' }))

// console.log(getNames()) gives error

console.log(betterGetNames()) //this doesnt gives errors on run time

console.log(betterGetNames2())
