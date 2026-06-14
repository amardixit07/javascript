const score= 400
console.log(score)
const balance = new Number (500.355555)
console .log(balance)
console.log(balance.toString().length) // it gives the length of the string representation of the number
console.log(balance.toFixed(2)) // it gives the number with 2 decimal places
console.log(balance.toExponential(2)) // it gives the number in exponential form with 2 decimal places
console.log(balance.toPrecision(3)) // it gives the number with 3 significant digits
const hundreds=10000000000;
console.log(hundreds.toLocaleString("en-IN")) // it gives the number in indian format
console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-5)) // it gives the absolute value of the number
console.log(Math.round(4.5)) // it rounds the number to the nearest integer
console.log(Math.ceil(4.1)) // it rounds the number up to the nearest integer   
console.log(Math.floor(4.9)) // it rounds the number down to the nearest integer
console.log(Math.random()) // it gives a random number between 0 and 1
console.log(Math.random()*100) // it gives a random number between 0 and 100
console.log(Math.floor(Math.random()*100)) // it gives a random integer between 0 and 99
console.log(Math.max(1,2,3,4,5)) // it gives the maximum number from the given numbers
console.log(Math.min(1,2,3,4,5)) // it gives the minimum number from the given numbers
// it gives a random number between 1 and 6 and also a whole number
console.log(Math.floor(Math.random()*6)+1)
console.log(" random number between 1 and 6 and also a whole number")
const min =1
const max=6
console.log(Math.floor(Math.random()*(max-min+1))+min) // it gives a random number between min and max and also a whole number