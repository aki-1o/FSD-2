var http = require("http")

http.createServer(function(req, res) {
     res.writeHead(200, {'content-type' : "text/html"})  // text/plain gives data in pure string as output
    res.write("hello")
    res.write("<h1>Hello in h1</h1>")
    res.end()
}).listen(8080)