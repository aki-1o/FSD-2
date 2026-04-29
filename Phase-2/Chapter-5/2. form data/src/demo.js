var expr = require("express")
var app = expr()
var path = require("path")
var sp = path.join(__dirname, "../public")

//necessary to load css fles. this sends dependencies of html file tat includes css file
app.use(expr.static(sp))

app.get("/", (req, res) => {
    res.sendFile(sp+"/2.html")
})
app.listen(1000)