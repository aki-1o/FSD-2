//  --  To write 

//as sync, this writes into a file but it should have an callback function to catch an error
var fs = require("fs")
fs.writeFile("data.txt", "hello", (err) => {
    if(err) throw err
    console.log("File written successfuly")
})
