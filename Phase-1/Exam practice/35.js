const a = {
"A" : "LJU",
"B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],
"C" : [ {
"D" : "Hi",
"E" : ['are', 4, {'F' : ['semester', 'We']} ]
}],
"G" : {"H" : "students", "I" : ["of","!"] },
"J" : [{"K" :".", "L":"-"},"FSD-2"]
}

// Hi ! We are students of LJU .
// Exam - FSD2

console.log(a.D + a.G.I[1] + " " + a.E[2].F[1] + " " + a.E[0] + " " + a.G.H +
    a.G.I[0] + " " + a.A + ' ' +a.J[0].K + "\n" + a.B[2].M[1] 
)