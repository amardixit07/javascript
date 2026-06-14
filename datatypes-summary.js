//primitive 
// 7 types : strng , number , boolean , null , undefined , symbol , bigint

// non-primitive 
// 1 type : object
const score = 100;
const name = "John";
const isLoggedIn = true;
const age = null;
let address;
//const score = 105 
console.log(name);
console.log(score);
const id= Symbol ("123")
const id2= Symbol("123")
console.log(id===id2);
const bignum=12222233333333333333332222n;
console.log(bignum)
const heroes = ["shaktiman", "superman"];
let myobj={ name : "hitesh",
    age: 22 
}
console.log(myobj)
const myfun= Function() 
{
    console.log("hello amar");
}
// data type pata krna -> by function
console.log(typeof myobj + " -> it is the data type");
console.log(typeof id + " -> it is the data type");
myfun();

