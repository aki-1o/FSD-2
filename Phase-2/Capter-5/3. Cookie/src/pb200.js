const expr = require("express");
var app = expr()
var cp = require("cookie-parser") 

app.use(cp())
app.use(expr.static("../public", {index: "pb200.html"}))
app.get("submit-feedback", (req, res) => {
    feedback = req.query
    res.cookie("feedback", feedback, {maxAge: 10000})
    res.send(`Thank u for your feedback! <br>
        <a herf="/feedback-details>Show feedback</a>`)
        app.get("/feedback", (req, res) => {
            if (feedback) {
                ...
            }
})