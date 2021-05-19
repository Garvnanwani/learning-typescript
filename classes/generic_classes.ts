interface GenericDatabase<K, T> {
    get(id: K): T
    set(id: K, value: T): void
}

type DbKeyType = string | number | symbol

class GenericInMemoryDatabase<K extends DbKeyType, T> implements GenericDatabase<K, T> {

    // there are 3 diff member visibility setting ->
    // private -> only this classscan see it
    // protected -> this class or its descendants can see it
    // public -> default beahvior, anyone can see and modify it

    protected db: Record<K, T> = {} as Record<K, T>

    get(id: K): T {
        return this.db[id]
    }
    set(id: K, value: T): void {
        this.db[id] = value
    }
}

const genericmyDB = new GenericInMemoryDatabase<string, string>()

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

class GenericPersistentMemoryDB<K extends DbKeyType, T> extends GenericInMemoryDatabase<K, T> implements Persistable {

    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const genericmyDB2 = new GenericPersistentMemoryDB<string, number>()

genericmyDB2.set("foo", 45)
console.log(genericmyDB2.get("foo"));
console.log(genericmyDB2.saveToString());

const genericsaved = genericmyDB2.saveToString()

const genericmyDB3 = new GenericPersistentMemoryDB<string, number>()

genericmyDB3.restoreFromString(genericsaved)

console.log(genericmyDB3.get("foo"))
