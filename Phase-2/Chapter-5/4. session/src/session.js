/**Writw express code to meet floolowing requrements.
 * 1. create index.html file. which contains form of user name, pass, and login buton. open it on home page.
 * 2. after clicking login button, it should ump to save session page. store username and pass in a session. 
 * 3. after saving, redirect to fetch_session page. display value and provide logout link.
 * 4. jump on delete_session page after clinking logout link.
 * 5. destroy the session and redirect to home page.
 */

const expr = require("express")
const es =  require("express-session")
const app = expr()

app.use(es({secret: "abc"}))

app.use(expr.static("../public"))
app.get("/savesession", (req, res) => {
    req.session.username = req.query.uname
    req.session.pass = req.query.pwd
    res.redirect("fetchsession")
})

app.get("/fetchsession", (req, res) => {
    res.write(`<h1>Welcome ${req.session.username}</h1>`)
    res.write(`<h1>Your password: ${req.session.pass}</h1>`)
    res.write('<a href="/deletesession">Logout</a>')
    res.send()
})

app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})

app.listen(1000)