var sqa=function as(num){ return num*num}

function nef(a)
{
 var s=a();
console.log(s);
a(9);
console.log(s)
}
nef(sqa)