// what id you want to not let users make just a class seperately but want a class as tempplate for other classes so that they both need to be created at a time, you can use the abstract keyword

abstract class StreetFighter {
    constructor() { }

    move() { }
    fight() {
        console.log(`${this.name} attacks with ${this.getSpecialAttack()}`);
    }

    abstract getSpecialAttack(): string
    abstract get name(): string
}

// const ryu = new StreetFighter() you cant do this

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Hadoken"
    }
    get name(): string {
        return "Ryu"
    }
}


class Chunli extends StreetFighter {
    getSpecialAttack(): string {
        return "Lightning kick"
    }
    get name(): string {
        return "Chun-li"
    }
}

const ryu = new Ryu()
const chunli = new Chunli()

ryu.fight()
console.log(ryu.getSpecialAttack());
chunli.fight()
console.log(chunli.getSpecialAttack());
