const http = require("http")
const fs = require("fs")

num = fs.readFileSync("numbers.txt", 'utf-8')
num = num.split(" ")
num = num.map(Number)
num = num.sort()

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end(num.join(", "))
    }
}).listen(1000)