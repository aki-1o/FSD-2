var expr = require("express")
var app = expr()

a = {name: 'abc'}
app.get("/", function(req, res) {
    res.set("content-type", "application/json")
    //2
    // res.write(JSON.stringify(a))
    res.send(a)
})
app.listen(3000)