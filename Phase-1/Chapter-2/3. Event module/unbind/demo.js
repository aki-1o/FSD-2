const e1 = require("events")
const ee1 = new e1()

function fun11() {
    console.log('Two at once 1')
}

function fun111() {
    console.log('Tow at once 2')
}

ee1.on("start1", fun111)
ee1.on("start1", fun11)
ee1.emit("start1")

//to nubind listener
//ee1.removeListener("start1", fun111)
//ee1.emit("start1")

// to remove all listeners ee1.removeAllListeners("start1")

a = ee1.listenerCount("start1")
console.log(a)