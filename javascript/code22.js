var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
          console.log(obj[key])
   }
   getProperty(obj,"mykey")
   getProperty(obj,"dummy")