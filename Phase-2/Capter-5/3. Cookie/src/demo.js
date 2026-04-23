var expr = require("express")
var app = expr()
var cp = require("cookie-parser") // middel ware

app.use(cp()) // binds middel wares with app
app.get("/cookie", (req, res) => {
    res.cookie("fname", "Express")
    res.cookie("lname", "JS")
    res.cookie("ID", "2", {"expires": new Date(Date.now() + 1000)})
    res.cookie("email", "abc@gmail.com", {"maxAge": 2000})
    res.clearCookie("fname")
    res.send(req.cookies)
})

app.listen(1000)