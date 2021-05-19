interface Database {
    get(id: string): string
    set(id: string, value: string): void
}


class InMemoryDatabase implements Database {

    // there are 3 diff member visibility setting ->
    // private -> only this classscan see it
    // protected -> this class or its descendants can see it
    // public -> default beahvior, anyone can see and modify it

    protected db: Record<string, string> = {}

    get(id: string): string {
        return this.db[id]
    }
    set(id: string, value: string): void {
        this.db[id] = value
    }
}

const myDB = new InMemoryDatabase()

myDB.set("foo", "bar")

// if you dont specify private, db will be public member by default and anyone can edit its value without letting the getter or setter function know and this is not good

// now that its private, only this class will be able to see it

// myDB.db["foo"] = "baz"

console.log(myDB.get("foo"));

// extending existing classes
interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {

    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const myDB2 = new PersistentMemoryDB()

myDB2.set("foo", "bar")
console.log(myDB2.get("foo"));
console.log(myDB2.saveToString());

const saved = myDB2.saveToString()

const myDB3 = new PersistentMemoryDB()

myDB3.restoreFromString(saved)

console.log(myDB3.get("foo"))
