/* 
how to create an object:
var e = require("events")
var ee = new e()
ee.on(eventname, handeler/function) 
*/

const e = require("events")
const ee = new e()

//first method
function fun() {
    console.log('hello1')
}

ee.on("start", fun)
ee.emit("start")

//secont metod
function fun2(a, b) {
    console.log('hello2 '+ a+b)
}

ee.on("start2", fun2)
ee.emit("start2", 10, 20)

//third method
ee.on("start3", ()=> {
    console.log('hello3')
})
ee.emit("start3")

//fourth method
ee.on("start4", (a, b)=> {
    console.log('hello4 from ' + a + " to " + b)
})
ee.emit("start4", 1, 100)

//ee.on() and ee.addListener() dose the same work. it is used to bind the events with it's 

const e1 = require("events")
const ee1 = new e()

function fun11() {
    console.log('Two at once 1')
}

function fun111() {
    console.log('Tow at once 2')
}

ee.on("Two", fun111)
ee.on("Two", fun11)
ee.emit("Two")