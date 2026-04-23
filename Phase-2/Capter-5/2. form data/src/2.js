var expr = require("express")
var app = expr()
app.use(expr.static("../public", {index: "form.html"}))

app.get("/process_get", (req, res) =>{
    console.log(req.query)
    res.send("Welcome " + req.query.uname + " " + req.query.lname) 
})
app.listen(1000)