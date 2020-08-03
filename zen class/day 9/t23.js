var a=require("./db.json")
var popless=a.filter((con)=> con.population < 200000)
console.log(popless)