// Write a nodeJS script to fire an event named calculate which
// calculates the total marks of 5 subjects about of 25 marks and
// displays the total marks on console as an output.The calculate event
// fires another event name percentage which takes total marks as
// argument and percentage should get displayed in console

const e = require("events")
const ee = new e()

ee.on("calculate", () => {
    marks = [22, 18, 20, 25, 24]
    total = 0

    for (i=0; i<marks.length ; i++) {
        total += marks[i]
    }
    console.log("Total marks: ", total)
    ee.emit("Percentage", total)
})

ee.on("Percentage", (total) => {
    const totalMaxMarks = 5*25
    percentage1 = (total/totalMaxMarks)*100
    console.log("Percentage: ", percentage1 + "%")
})
ee.emit("calculate")