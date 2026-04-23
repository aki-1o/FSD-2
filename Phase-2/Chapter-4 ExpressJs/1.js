var express = require("express")
var app = express()

app.get("/", function(req, res) {
    //res.set("contern-type", "text/plain")  
    res.type("text/plain")
    res.write("Hiee")
    res.send()
})
app.listen(3000)