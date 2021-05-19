// support you want to make a type wherein one or two fields are neccesary but then you want any number of fields like a record functionality but with some mandatory stuff


// you can acheive something like this using record utility type

// type MyFlexibleDogInfo = {
//     name:string
// } & Record<string, string | number>

// or using flexible fields

type MyFlexibleDogInfo = {
    name: string
    [key: string]: string | number // flexible fields
}

const dog: MyFlexibleDogInfo = {
    name: "pomodomo",
    breed: "Mutt",
    fer: 324,
    aString: "sdfcsadi"
    // you can enter anything here provided it matches type
}


// mapped types

interface DogInfo {
    name: string,
    age: number
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}

// what this does is takes the doginfo type and maps every key to a boolean field as specified in optionsflag

type DogInfoOptions = OptionsFlags<DogInfo>


type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
        newValue: Type[Property]
    ) => void;
} & {
        [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
            newValue: Type[Property]
        ) => void;
    }

const listenToObject = <T>(obj: T, listeners: Listeners<T>): void => {
    throw "Needs to be implemented"
}

const lg: DogInfo = {
    name: "lg",
    age: 15
}

type DogInfoListeners = Listeners<DogInfo>


listenToObject(lg, {
    onNameChange: (v: string) => { },
    onAgeChange: (v: number) => { },
    onAgeDelete: () => { }
})
