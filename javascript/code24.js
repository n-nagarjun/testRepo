var obj={"name":"arjun","type": true}
function removeProperty(obj, key){
    delete obj[key]
    return obj
   }
   console.log(removeProperty(obj,"name"))
