function findMax(ar)
{
 var a=ar[0]
 for (var i=1 ;i < ar.length ; i++)
 {
     if(a<ar[i])
     {
       a=ar[i]
     }
 }
 return a
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:",max);