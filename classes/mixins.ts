// used to add functionality to classes which you may not control

// function that creates function
const myLogFunction = () => {
    return (str: string) => {
        console.log(str)
    }
}

const logger = myLogFunction()
logger("your string")


// function that creates class
const createLoggerClass = () => {
    return class MyLoggerClass {
        private completeLog: string = ""
        log(str: string) {
            console.log(str)
            this.completeLog += str + "\n"
        }
        dumpLog() {
            return this.completeLog
        }
    }
}

const myLogger = createLoggerClass()
const logger2 = new myLogger()

logger2.log("Foo")
logger2.log("Bar")
console.log(logger2.dumpLog())


// Functions creating generic classes
const CreateSimpleMemoryData = <T>() => {
    return class SimpleMemoryData {
        private db: Record<string, T> = {}
        set(id: string, value: T) {
            this.db[id] = value
        }
        get(id: string): T {
            return this.db[id]
        }
        getObject(): object {
            return this.db
        }
    }
}


const StringDatabase = CreateSimpleMemoryData<string>()
const sbd1 = new StringDatabase()

sbd1.set("something", "else")
console.log(sbd1.get("something"))
console.log(sbd1.getObject())

type Constructor<T> = new (...args: any[]) => T

// creating a mixin
const Dumpable = <T extends Constructor<{ getObject(): object }>>(Base: T) => {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject())
        }
    }
}


const DumpableStringDatabase = Dumpable(StringDatabase)
const sdb2 = new DumpableStringDatabase()

sdb2.set("a", "b")
sdb2.dump()
