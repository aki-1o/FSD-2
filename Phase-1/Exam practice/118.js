process.noDeprecation = true
const fs = require("fs")
const url = require("url")

var link = "https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done"
parsed = url.parse(link, true)
console.log(parsed.pathname)

file_name = "D:/working files" + parsed.pathname
d = parsed.query
data = d.m1 + "\n"  + d.m2 + "\n"  + parsed.hash 
console.log(data)
fs.writeFile(file_name, data, (err) => {
    if (err) throw err
    console.log("Successful")
})