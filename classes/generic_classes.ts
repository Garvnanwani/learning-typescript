interface GenericDatabase<T> {
    get(id: string): T
    set(id: string, value: T): void
}


class GenericInMemoryDatabase<T> implements GenericDatabase<T> {

    // there are 3 diff member visibility setting ->
    // private -> only this classscan see it
    // protected -> this class or its descendants can see it
    // public -> default beahvior, anyone can see and modify it

    protected db: Record<string, T> = {}

    get(id: string): T {
        return this.db[id]
    }
    set(id: string, value: T): void {
        this.db[id] = value
    }
}

const genericmyDB = new GenericInMemoryDatabase()

genericmyDB.set("foo", "bar")

// if you dont specify private, db will be public member by default and anyone can edit its value without letting the getter or setter function know and this is not good

// now that its private, only this class will be able to see it

// myDB.db["foo"] = "baz"

console.log(genericmyDB.get("foo"));

// extending existing classes
interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
}

class GenericPersistentMemoryDB<T> extends GenericInMemoryDatabase<T> implements Persistable {

    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const genericmyDB2 = new GenericPersistentMemoryDB<number>()

genericmyDB2.set("foo", 45)
console.log(genericmyDB2.get("foo"));
console.log(genericmyDB2.saveToString());

const genericsaved = genericmyDB2.saveToString()

const genericmyDB3 = new GenericPersistentMemoryDB<number>()

genericmyDB3.restoreFromString(genericsaved)

console.log(genericmyDB3.get("foo"))
