var obj = {
    mykey: "value"
   };
   function addProperty(obj,key)
   {
        obj[key] = true
        return obj
   }
   console.log(addProperty(obj,"key"))