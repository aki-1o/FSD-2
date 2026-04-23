const http = require("http")
http.createServer(function(req, res) {
    if(req.url == "/") {
        res.end("This is home page")
    }
    else if(req.url == "/sec") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.end('<i>This is secont page</i>')
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("Page not found")
    }
}).listen(1000)