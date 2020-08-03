var a=require("./db.json")
var capname=a.map((cap)=> cap.name=cap.name.toUpperCase())
console.log(capname[0])