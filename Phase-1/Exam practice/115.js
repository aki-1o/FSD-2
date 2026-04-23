const http = require("http")
http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.write('<a href="/about">about</a>')
        res.write('<a href="/contactus">contsct us</a>')
        res.end()
    }
    else if(req.url == "/about") {
        res.writeHead(200, {"content-type": "text/html"})
        res.write('<b style="color:blue">Welcome to Lj univercity</b>')
        res.end()
    }
    else if(req.url == "/contactus") {
        res.writeHead(200, {"content-type": "text/html"})
        res.end('<i style="color:red;">Email:abc@ljinstitutes.edu.in</i>')
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("page not found")
    }
}).listen(1000)