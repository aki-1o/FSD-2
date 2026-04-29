var nm = require("nodemailer")
var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "akshatthoriya1@gmail.com",
        pass: "axsu buno huiq azgd"
    }
})

var mailoption = {
    from: "akshatthoriya1@gmail.com",
    to: "sutariyasafeer1@gmail.com",
    subject: "Hello",
    //text: "testing nodemailer",
    html: "<h1>Hello</h1>"
}

trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.log(err)
        console.log(info)
    }
})