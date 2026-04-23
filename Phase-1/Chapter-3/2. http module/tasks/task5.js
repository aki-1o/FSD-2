// write node js script to fetch values from url given bellow
//https://www.google.com/exam
//and display output as asked
// 1. data must be written as bellow in filenamed exam.txt. file name must be fetched from the url given.
// 2. read the content from the file exam.txt and send to server. display data on homg page. 
// 3. if any other page is requsted, then show page not found in plain txt
process.noDeprecation = true

var http = require("http")
var fs = require("fs")
var url = require("url")

l = "https://www.google.com/exam.txt?c1=hello&c2=FSDT11&c3=welcometoLJU#allthebest"
link = url.parse(l, true)
file = link.pathname
file_name = "D:/working files" + file

a = link.query
o = JSON.stringify(a)
file = fs.writeFileSync(file_name, o)
readfile = fs.readFileSync(file_name)

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/plain"})
        res.end(readfile)
    }
    else {
        res.writeHead(404, {"content-type": "text/pliain"})
        res.end()
    }
}).listen(8083)