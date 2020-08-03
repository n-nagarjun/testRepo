function cont(ops,array)
{
  let a =10 ; let b =20;
  array[ops](a,b)


}
arr=[add,sub,mul]
function add(a,b)
{
    console.log(a+b)
}
function sub(a,b)
{
    console.log(a-b)
}
function mul(a,b)
{
    console.log(a*b)
}
cont(0,arr)
cont(1,arr)
cont(2,arr)