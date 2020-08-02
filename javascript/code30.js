function powersOfTwo(n)
{
    var res=[]
    for(var i = 0;i<=n;i++)
    {
    res.push(2**i)
    }
    return res;
  }
  console.log(powersOfTwo(0))
  console.log(powersOfTwo(1))
  console.log(powersOfTwo(2))