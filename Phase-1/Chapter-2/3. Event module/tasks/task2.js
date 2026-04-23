/**
 * write node js script to handel events as asked bellow
 * 1. check if the recius is -ve or not. if -ve, then display message "radius must be +ve" else calc paramenter of circle
 * 2. check side is -ve or not. if -ve then display message "side must be +ve" else clac parameter of square
 */

const e = require("events")
const ee = new e()

ee.on("nRadius", () => {
    console.log("radius must be +ve")
})

ee.on("nSide", () => {
    console.log("side must be +ve")
})

ee.on("final", (r, s) => {
    if (r<0) {
        ee.emit("nRadius")
    }
    else {
        var perrimeter1 = 2*3.14*r
        console.log("paremeter of the circle: " + perrimeter1)
    }

    if (s<0) {
        ee.emit("nSide")
    }
    else {
        var perrimeter2 = 4*s
        console.log("Perimeter of square: " + perrimeter2)
    }
})

ee.emit("final", 10, 3)
ee.emit("final", 10, -3)
ee.emit("final", -10, 3)