// recreate foreach, filter, map using reduce


// forEach
const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
    items.reduce((a, v) => {
        forEachFunc(v)
        return undefined
    }, undefined)
}

myForEach([1, 2, 3, 4], (v) => console.log(v))

// filter

const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
    return items.reduce((a, v) => filterFunc(v) ? [...a, v] : a, [] as T[])
}



console.log(myFilter([1, 2, 3, 4, 5], (v) => v % 2 === 0))


//map

const myMap = <T, K>(items: T[], mapFunc: (v: T) => K): K[] => {
    return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[])
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => (v * 10).toString()));
