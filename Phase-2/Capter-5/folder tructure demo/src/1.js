var expr = require("express")
var app = expr()

//if all files r in the same folder
// app.use(expr.static("__dirname",
//     {index: "index.html"} //not required if your html file is index.html
// ))

//if static files r in public folder
//app.use(expr.static("public"))

//if js file is in src folder
// var path = require("path")
// var sp = path.join(__dirname, "../public")
// app.use(expr.static(sp))

//another way for public and src folders
app.use(expr.static("../image"))
app.use(expr.static("../public"))


console.log(__dirname)
app.listen(1000)