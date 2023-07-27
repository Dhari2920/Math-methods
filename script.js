//while loop
var countdown = 10;
var i = 0;
while(i < countdown)
{
    console.log(countdown);
   countdown--;
}

//Math methods:
//Math.floor =>Takes base value,-ve means next nearest value
console.log(Math.floor(5.9));//5

//Math.ceil =>Takes high value,-ve means lower value
console.log(Math.ceil(5.1));//6

//Math.round =>Takes round value
console.log(Math.round(5.4));//5

//Math.sqrt =>5^2=25
console.log(Math.sqrt(25));//5
console.log(Math.sqrt(0));//0
console.log(Math.sqrt(-2));//NaN

//Math.cbrt =>5^3=125
console.log(Math.cbrt(125));//5

//Math.trunc =>without decimal value
console.log(Math.trunc(-4.8));//-4
console.log(Math.trunc(4.8));//4

//Math.min
console.log(Math.min(-4.8,3,2,-8.6,2.8));//8.6

//Math.pow =>2^5=32
console.log(Math.pow(2,5));//32

//Math.random =>Generate random values
console.log(Math.random()*5);
