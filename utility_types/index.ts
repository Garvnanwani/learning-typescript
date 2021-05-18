interface MyUser {
    name: string
    id: string
    email?: string
}

interface MyUserOptionals {
    name?: string
    id?: string
    email?: string
}

// you see the problem to do something like this where we pass the user + we want to edit the user, making sure certain fields are required and some not, we have to create another optioanal interface other we wont be able to update the uer without specifying all the fields again and again. WHat if we add something to myuser, we will have to constantly update my_user_optionals again and again

// partial type solves the problem, it takes a type or interface and makes everything optional, so we wont have to do that mannualy

type MyUserOptionalsPartial = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionalsPartial): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "someName",
    id: "u1",
}, {
    email: "something@gmail.com"
}));


// the opposite of partial is required

type RequiredMyUser = Required<MyUser> // all fields become required


// choosing the fields

type JustEmailAndName = Pick<MyUser, "email" | "name"> // you can pick the fields you want, optionals are kept optional


// creating a record

// the opp of pick is omit, which lets you remove certain fields from type or interface

type UserWithoutId = Omit<MyUser, "id">

// one more thing you can do is taking the type from the field rather than typing it directly so instead of type string you can use type of id by MyUser["id"]

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {

    return users.reduce((a, v) => {
        const { id, ...other } = v

        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapById([
    {
        id: "foo",
        name: "some name"
    },
    {
        id: "foo2",
        name: "some other name"
    }
]));
