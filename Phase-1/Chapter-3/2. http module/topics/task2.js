var http = require("http")

http.createServer(function(req, res) {
    res.write("hieee\n")
    res.write("hello\n")
    res.end("hie")

    res.end("hie")
}).listen(8080)