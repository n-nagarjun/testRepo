var a=require("./db.json")
var asiacountries= a.filter((con)=> con.region == "Asia")
var popasia=asiacountries.reduce((cv,co)=>co.population+cv,0);
console.log(popasia)