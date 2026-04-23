var http = require("http")

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : "application/json"})  
    let a = {name:'abc', no:1}
    res.write(JSON.stringify(a))
    res.end()
}).listen(8080)