var http = require("http")
var fs = require("fs")
file = fs.readFileSync("japanese shop frame.jpg")

http.createServer(function(req, res) {
    res.writeHead(200, {"content-type" : "image/jpg"})
    res.write(file)
    res.end()
}).listen(8082)