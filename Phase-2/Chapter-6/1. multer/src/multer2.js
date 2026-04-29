const expr = require("express")
const app = expr()
const multer = require("multer")

app.use(expr.static("../public", {index: "form2.html"}))

var store = multer.diskStorage({
    destination: "lju",
    filename: function(req, file, cb) {
        cb(null, file.fieldname + Date.now() + ".pdf")
    }
})

var uplod = multer({storage: store, limits: {fileSize:1024*1024}})

app.post("/data", uplod.array("mypic", 5), (req, res) => {
    files = req.files

    if(files) {
        res.set("content-type", "text/html")

        for (i of files) {
            res.write(`<h1>Your file named as <span style="color:red"> ${i.originalname} </span></h1>`)
        }
        res.send()
    }
})
app.listen(1000)