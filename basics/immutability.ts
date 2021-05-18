interface Cat {
    name: string;
    breed: string;
}

// or you can also make specific fields readonly, here we used readonly utility class to make whole object readonly
function makeCat(name: string, breed: string): Readonly<Cat> {
    return {
        name,
        breed,
    };
}

const cat1 = makeCat("cat1", "bread1");
// usul.name = "Piter";


// readonly tuple
function makeCoordinate(
    x: number,
    y: number,
    z: number
): readonly [number, number, number] {
    return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;

// making the whole thing a const
const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 50;
