const http = require("http")
http.createServer(function(req, res) {
    if (req.url == "/api") {
        res.writeHead(200, {"content-type": "applacation/json"})
        res.end(JSON.stringify({
            name: "rahul",
            course : "NodeJs",
            status : "Enrolled"
        }))
    }
    else {
        res.writeHead(404, {"content-type" : "textplain"})
        res.end("Page not found")
    }
}).listen(1000)