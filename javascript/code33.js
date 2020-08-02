var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var a=s.split("")
   var b=""
   for(var i=(a.length)-1;i>=0;i--)
   {
   b=b+a[i]
   }
   return b;
}