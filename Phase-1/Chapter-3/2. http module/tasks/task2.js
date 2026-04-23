// write node js script to perform task as asked bellow
//1. create one page with two links. home and about 
//2. on home page "welcome to home page" and in about page, load the img as responcs. if any other page request is generated, 
// then display "page under maintainance"

var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.end("Welcome to home page.")
    }
    else if(req.url == "/about") {
        img = fs.readFileSync("japanese.jpg")
        res.end(img)
    }
    else {
        res.end("page under maintanence")
    }
}).listen(8082)