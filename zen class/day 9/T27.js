var a=require("./db.json")
const allowed=["name","capital","flag"]
var fil3=a.map((item)=>allowed.reduce((obj,key)=>({ ...obj, [key]: item[key] }), {}));
console.log(fil3)