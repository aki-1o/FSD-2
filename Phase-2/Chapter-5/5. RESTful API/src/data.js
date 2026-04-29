const expr = require("express")
const router = expr.Router()
module.exports = router

const mui = [{
    id: 101,
    name: "abc",
    year: "2020",
    rating: 9.5},
    {
    id: 102,
    name: "pqr",
    year: "2021",
    rating: 9.8},
    {
    id: 103,
    name: "xyz",
    year: "2024",
    rating: 8.7}
]

router.get("/", (req, res) => {
    res.json(mui)
})

router.get("/:id", (req, res) => {
    var curmui = mui.filter((m) => {
        if (m.id == req.params.id)
            return true
    })

    if ((curmui.length==1)) {
        res.json(curmui[0])
    }
    else {
        res.json("No data")
    }
})