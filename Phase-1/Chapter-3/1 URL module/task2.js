process.noDeprecation = true

var fs = require("fs")
var url = require("url")
var addr = "https://localhost:8080/default.html?year=2025&month=feb"

var q = url.parse(addr, true)
year = q.query.year
month = q.query.month

if ((year % 4 == 0 & year % 100 != 0) | (year % 400 == 0)) {
    console.log("Leap year")
} 
else {
    console.log("Not a leap year")
}

var query = q.query
var s = JSON.stringify(query)

fs.writeFile("D:/working files/url1.txt", s, (err) => {
    if (err) throw err
    console.log("file written successfully.")
})