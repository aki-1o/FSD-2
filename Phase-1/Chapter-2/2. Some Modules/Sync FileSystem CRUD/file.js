//  --  to write a file

//we have too require() the module we wanna work in
//WriteFileSync( filename, data )  --  creats a new file or makes a new file and replaces the old data with new 
let fs = require("fs")
fs.writeFileSync("User.txt", "Hello")

//to append data instead of replacing it we use appendFileSync( file, data )
//also makes a new file if the given path dosen't exist 
fs.appendFileSync("User.txt", "\nworld")

//  --  to read a file

//to read a file, we use readFileSync( filename, "UTF-8" )
var data = fs.readFileSync("User.txt", "utf-8")  //  instead of utf-8 we can use toString() in bellow console.log( ..)
console.log(data)

// to rename file, renameSync( "old file name", "new file name" )
fs.renameSync("User.txt", "user1.txt")

// to copy a file
fs.copyFileSync("user1.txt", "user2.txt")

// delete a file
fs.unlinkSync("user2.txt")

// to make directory
//mkdissync throws a error if file already exists
//fs.mkdirSync("fsd")
fs.writeFileSync("fsd/user.html", "<h1>Hello</h1>")

//to delete a file
fs.unlinkSync("fsd/user.html")
fs.rmdirSync("fsd")

