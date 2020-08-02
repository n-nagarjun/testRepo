getPrimes(10, 100);
function getPrimes(nPrimes, startAt)
{
    var n = 1;
    var i =startAt;
    
    while(n <= nPrimes)
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