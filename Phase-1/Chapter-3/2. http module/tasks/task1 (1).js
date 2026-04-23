var http = require("http")

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.write('<h1 style="color:blue">Welcome to home page</h1>')
        res.end()
    }
    else if(req.url == "/about") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.end('<h1 style="color:blue">Welcome to about page</h1>')
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("Page not found")
    }
}).listen(8080)