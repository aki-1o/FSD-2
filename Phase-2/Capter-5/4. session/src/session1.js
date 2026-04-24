const expr = require("express")
const app = expr()
const es = require("express-session")

app.use(es({secret:"abc"}))
app.use(expr.urlencoded())
app.use(expr.static("../public", {index: "index1.html"}))

app.post("/login", (req, res) => {
    req.session.username = req.body.username
    res.redirect("/order.html")
})

app.post("/order", (req, res) => {
    req.session.product = req.body.product
    req.session.quantity = req.body.quantity
    res.redirect("/summary")
})

app.get("/summary", (req, res) => {
    res.send(`<h1>Summary<h1>
        Uname: ${req.session.username} <br/>
        Product: ${req.session.product} <br/>
        quantity: ${req.session.quantity}`
    )
})

app.listen(1000)