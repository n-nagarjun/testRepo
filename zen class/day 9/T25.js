var a=require("./db.json")
a.forEach((ke) => ke.population=ke.population+100000)
console.log(a[0])