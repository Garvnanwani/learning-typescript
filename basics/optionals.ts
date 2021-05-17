const printIngredients = (quantity: string, ingredient: string, extra?: string): void => {
    console.log(`${quantity} ${ingredient} ${extra ?? ''}`);
    // console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`); same thing as above
}

// remember you cant put a required paramter after an optional paramter and it gets wierd

printIngredients("1C", "Flour")
printIngredients("2C", "Wheat", "additional info")


interface User {
    id: string
    info?: {
        email?: string
    }
}

const getEmail = (user: User): string => {

    // making the return type string makes ts complain that you are sure the output will be a string because it can be undefined also and you didnt handle that so one thing you can do to get around is use an ! mark at any point and coerce the behavior of ts

    // but this isnt recommended because you arent following the rules properly and implementing shortcuts

    if (user.info) {
        return user.info.email!
    }
    return ""
}

// Better and easier way

const getEmailEasy = (user: User): string => {
    return user?.info?.email ?? ""
}


// Optional callbacks

const addWithCallback = (x: number, y: number, callback?: () => void) => {
    console.log(x, y);

    // one way to do optional callback
    // if(callback) {
    //     callback()
    // }

    // better way
    callback?.()
}
