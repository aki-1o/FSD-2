/**
 * write node js script to create two listeners for a common event.
 * print number of events associated with an emmiter. remove one of the listener and call remaining 
 * listeners again. also print number of remaining listeners.
 */

const e = require("events")
const ee = new e()

function fun1() {
    console.log('hello1')
}

function fun2() {
    console.log('hello2')
}
function fun3() {
    console.log('hello3')
}

ee.on("start", fun1)
ee.on("start", fun2)
ee.on("start", fun3)

ee.emit("start")
count1 = ee.listenerCount("start")
console.log(count1 + "\n")

ee.removeListener("start", fun2)
ee.emit("start")

count2 = ee.listenerCount("start")
console.log(count2 + "\n")