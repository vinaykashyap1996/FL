var number=321;
var sum=0;
var rem;

while(number>0)
{
rem=number%10;
sum=sum*10+rem;
number=parseInt(number/10);
}

console.log("sum");
