process.noDeprecation = true

var url = require("url")
var addr = "https://calhloost:8080/default.html?Name=Prof.KhushbuPatel&initial=PKP#MAM"
var q1 = url.parse(addr, true) //ParseQueryString = true parses the query into object from string

console.log(q1)
console.log("Type of query : " + typeof(q1) + " (before passing true = string) \n")  
console.log(q1.query.Name + "\n")