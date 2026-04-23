var expr = require("express")
var app = expr()

app.get("/", function(req, res) {
    res.type("text/plain")
    res.write("Welcome to home page")
    res.send()
})
app.get("/about", function(req, res){
    res.type("text/html")
    res.write("<h1>Welocme to About Page</h1>")
    res.send()
})
app.listen(3000, ()=> {
    console.log("Server started")
})