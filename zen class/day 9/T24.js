var a=require("./db.json")
var totalpop=a.reduce((cv,co)=> co.population+cv,0)
console.log(totalpop)