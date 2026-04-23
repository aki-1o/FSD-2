const http = require("http")
const fs = require("fs")

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/plain"})
        res.end("Welcome to login page")
    }
    else if(req.url == "/login") {
        res.writeHead(200, {"content-type" : "text/html"})
        file = fs.readFileSync("text.html")
        res.end(file)
    }
    else if(req.url == "/galary") {
        res.writeHead(200, {"content-type" : "image/jpg"})
        file = fs.readFileSync("D:/FSD-2/Phase-1/Chapter-3/2. http module/tasks/japanese.jpg")
        res.end(file)
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("Page not found")
    }
}).listen(1000)