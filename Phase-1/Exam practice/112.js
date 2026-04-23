const http = require("http")
const url = require("url")
const fs = require("fs")

l = "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
link = url.parse(l, true)
q = link.query
console.log(q)

data = q.c1 + "!\n" + q['amp;c3'] + " " + q['amp;c2'] + "\n#" + link.query.hash
fs.writeFileSync("D://working files/exam.txt", data)

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        data = fs.readFileSync("D://working files/exam.txt")
        res.end(`<h1 style="color:red;">${data}</h1>`)
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("page not found")
    }
}).listen(1000)