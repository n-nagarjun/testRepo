printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(num)
{
    var flag=0
    for(var i=2 ; i <= num/2 ; i++) 
    {
        
        if(num%i == 0) {
            flag = 1
           return false;
        }
     }
    if(flag == 0) {
        return true;
}
}