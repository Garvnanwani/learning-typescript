interface Coordinate {
    x: number
    y: number
}

// Suppose we want to make a function that can either take an object as paramter or directly the properties, in ts it will be difficult bcoz we have to specify the input type, so you may think we can make two diff functions for both use cases

const parseCoordinateFromObject = (obj: Coordinate): Coordinate => {
    return {
        ...obj
    }
}

const parseCoordinateFromNumbers = (x: number, y: number): Coordinate => {
    return {
        x,
        y
    }
}

// but thats hectic, instead we can use function overloading

function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(str: string): Coordinate
function parseCoordinate(x: number, y: number): Coordinate


// unknown type is basically any but you will have to define it before using it

// optional paramte are defined by ?:, you need to do that because one place you are taking two paramters and other only one

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    // IMP
    // We are checking for object and not for tye Coordinate because this is a run time check and not compile type check, and at run time there will be no interfaces or types available

    if (typeof arg1 === 'object') {

        // you cant simply do ..arg1 because you havent set the type first, you do that by type coercing using as keyword

        coord = {
            ...(arg1 as Coordinate)
        }
    } else if (typeof arg1 === "string") {
        (arg1 as string).split(',').forEach(str => {
            const [key, value] = str.split(':')
            coord[key as 'x' | 'y'] = parseInt(value, 10)
        })
    }
    else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    return coord;
}


console.log(parseCoordinate(10, 20))
console.log(parseCoordinate("x:50,y:60"))
console.log(parseCoordinate({ x: 30, y: 40 }))
