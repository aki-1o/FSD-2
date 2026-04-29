var expr = require("express")
var app = expr()

app.use(expr.static("../public", {index: "calc.html"}))
app.get("/calc", (req, res)=>{
    n1 = parseInt(req.query.n1)
    n2 = parseInt(req.query.n2)

    if ((n1>0) && (n2>0)) {
        if (req.query.formula == "add") {
            a = n1 + n2
            res.write("Addition: " + a)
        }

        else if(req.query.formula=="sub") {
            b = n1 - n2
            res.write("Subtraction: " + b)
        }
        else if (req.query.formula=="div") {
            c = n1/n2
            res.write("Division: " + c)
        }
        else if(req.query.formula == "mul") {
            d = n1*n2
            req.write("Multiplication: " + d)
        }
    }
    else {
        req.write("Enter valid number.")
    }
    res.send()
})

app.listen(1000)