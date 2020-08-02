var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = []
countPositivesSumNegatives(arr)
function countPositivesSumNegatives(arr) {
    var sum1=0
    var sum2=0
    for(var i=0;i< arr.length;i++)
    {
        if(arr[i] >= 0)
        {
        sum1 += arr[i]
        }
        else
        {
        sum2 += -arr[i]
        }
    }
    arr2[0]=sum1
    arr2[1]=sum2
 
}
console.log(arr2);