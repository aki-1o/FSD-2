//create http web page on which home page displays "welcome to login page" in blue color and font size must be 32px.
// login page shows html file from the static url having foem of details for user name pass submit and reset button.
// galary page reflect one image and any other page shows "page not found". write all necessary files to perfor the task.

var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.end("<p style='color:blue; font-size: 32px;'>Welcome to login page.</p>")
    }
    else if(req.url == "/login") {
        res.writeHead(200, {"content-type" : "text/html"})
        text = fs.readFileSync("text.html")
        res.end(text)
    }
    else if(req.url == "/galary") {
        res.writeHead(200, {"content-type" : "image/jpg"})
        img = fs.readFileSync("japanese.jpg")
        res.end(img)
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("page not found")
    }
}).listen(8082)