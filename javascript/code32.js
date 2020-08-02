console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  var a=s.split(",")
  let sum=0
  for(var i =0;i <a.length;i++)
  {
      sum+= +a[i]
  }
  return sum

}