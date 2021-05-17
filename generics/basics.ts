// lets take the useState implemetation and make it type independent


// T can be any type
const simpleState = <T>(initial: T): [() => T, (v: T) => void] => {
    let val: T = initial

    return [
        () => val,
        (v: T) => {
            val = v
        }
    ]
}

const [state1, setState1] = simpleState(500)

console.log(state1());
setState1(44)
console.log(state1());


// what if we want to make it null or string, changing the type as its independent


// if you do like this, the type will be inferred as null and you wont be able to change it later on
const [state2, setState2] = simpleState(null)

console.log(state2());
// setState2("hey") cant do this
// console.log(state2());


// rather use the generic syntax to define type and you will be good to go
const [state3, setState3] = simpleState<string | null | number>(null)

console.log(state3());
setState3(44)
console.log(state3());


// generics interfaces
// you can make anything generic

interface Rank<RankItem> {
    item: RankItem
    rank: number
}

const ranker = <RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] => {


    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }))

    ranks.sort((a, b) => a.rank - b.rank)

    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string
    hp: number
}

const pokemon: Pokemon[] = [
    {
        name: "Raichu",
        hp: 50
    },
    {
        name: "bulbasaur",
        hp: 40
    }
]

const ranks = ranker(pokemon, ({ hp }) => hp)

console.log(ranks);
