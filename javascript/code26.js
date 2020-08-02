function getPositives(ar)
{
 for(var i=0;i<ar.length;i++)
 {
     if(ar[i] >= 0)
     {
         ar2.push(ar[i])
     }
 }
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 =[] 
getPositives(ar);
console.log(ar2);