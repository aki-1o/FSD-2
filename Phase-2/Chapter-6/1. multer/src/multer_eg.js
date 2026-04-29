const expr = require("express")
const app = expr()
const multer = require("multer")

app.use(expr.static("../public", {index: "form.html"}))
store = multer.diskStorage({
    destination:"lju",
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})

var upload = multer({"storage": store})
app.post("/data", upload.single("mypic"), (req, res) => {
    if (req.file) {
        res.send(`Your file named ${req.file.originalname} has been uploaded to ${req.file.destination}`)
    }
})
app.listen(1000)