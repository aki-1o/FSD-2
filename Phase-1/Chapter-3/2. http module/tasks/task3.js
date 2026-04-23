var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.write("Welcome to home page.")
        res.write('<br><a href="/about">about</a>')
        res.write('<br><a href="/details">details</a>')
        res.end()
    }
    else if(req.url == "/about") {
        res.writeHead(200, {"content-type" : "image/jpg"})
        img = fs.readFileSync("japanese.jpg")
        res.end(img)
    }
    else if(req.url == "/details") {
        res.writeHead(200, {"content-type" : "text/html"})
        text = fs.readFileSync("D:/FSD-2/Phase-1/Chapter-1/demo2.html")
        res.end(text)
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("page under maintanence")
    }
}).listen(8082)