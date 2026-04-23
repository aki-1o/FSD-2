/**
 * write a node js script to handel event to write data in file. append the data in file and read the file and sisplay data in colsole.
 * all this operations r aync.
 */

const e = require("events")
const ee = new e()
const fs = require("fs")

ee.on("write", function() {
    fs.writeFile("D:/working files/a.txt", "this is a text ", (err) => {
        if (err) throw err
        console.log("file written successfully")
        ee.emit("append")
    })
})

ee.on("append", function() {
    fs.appendFile("D:/working files/a.txt", "Good morning", (err) => {
        if (err) throw err
        console.log("data appended successfully")
        ee.emit("read")
    })
})

ee.on("read", function() {
    fs.readFile("D:/working files/a.txt", "utf-8", (err, data) => {
        if (err) throw err
        console.log(data)
    })
})

ee.emit("write")