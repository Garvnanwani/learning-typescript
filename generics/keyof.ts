// KeyType has to be one of the keys in DataType

const pluck = <DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
): DataType[KeyType][] => {
    return items.map((item) => item[key])
}

const dogs = [
    { name: "Dog1", age: 12 },
    { name: "Dog2", age: 17 }
]

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));


// another use case where yuo have to extend the key of something and based on that something you want to type safe your following code

interface BaseEvent {
    time: number,
    user: string
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string }
    checkout: BaseEvent
}

const sendEvent = <Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void => {
    console.log([name, data]);
}

sendEvent("addToCart", { productID: "3", user: "someone", quantity: 1, time: 10 })
sendEvent("checkout", { time: 20, user: "else" })
