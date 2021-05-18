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
