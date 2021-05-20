class Doggy {
    // public name: string = ""

    // constructor(name: string, age: number) {
    //     this.name = name
    // }

    // instead of doing above you can simply do it as

    constructor(public readonly name: string, public readonly age: number) { }
}

const dobby = new Doggy("dobby", 13)

// dobby.name= "something else" you cant do this since this is readonly


// lets say you want to create a class with only one object, you can do that by using static on the instance and making the constructor private

class DogList {
    private doggies: Array<Doggy> = []

    static instance: DogList = new DogList()

    private constructor() { }

    static addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog)
    }

    getDogs() {
        return this.doggies
    }
}


DogList.addDog(dobby) // this is the only instance you can access
console.log(DogList.instance.getDogs())  //instance because its not static method
