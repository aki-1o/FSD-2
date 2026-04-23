// Write a file using one json object having keys name and place and read the file and display user's name in console

obj = {
    name : "abc",
    place : "amd"
}
data = JSON.stringify(obj)

var fs = require("fs")
fs.writeFileSync("newFile.txt", data)

obj1 = fs.readFileSync("newFile.txt")
newobj = JSON.parse(obj1)
console.log(newobj.name)

//CRUD  --  Create Read smth delete