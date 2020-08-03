var a=require("./db.json")
var asiacountries= a.filter((con)=> con.region == "Asia")
console.log(asiacountries)