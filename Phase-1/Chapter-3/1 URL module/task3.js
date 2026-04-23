//write a node js script to cal average of numbers passed in query parameter of this url

process.noDeprecation = true
addr = "https://localhost:8080/default.html?m1=30&m2=90&m3=60"
url = require("url")

var a = url.parse(addr, true)
data = []
var q = a.query

a = parseInt(q.m1)
b = parseInt(q.m2)
c = parseInt(q.m3)

avj = (a+b+c)/3
console.log(avj)