const expr = require("express")
const app = expr()
const es = require("express-session")

app.use(es({
    resave: false,
    saveUninitialized: false,
    secret: "JLU"
}))

app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++
        res.send(`<h1 style="color:blue">You have visited the websiet ${req.session.page_views} times</h1>`)
    } else {
        req.session.page_views=1
        res.send(`<h1 style="color:green">Welcome! Thank you for visiting for website</h1>`)
    }
})
app.listen(1000)