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
// =====================================
// stack -> primitive = , heap -> non-primitive
// primitive data types are immutable -> cannot be changed
// non-primitive data types are mutable -> can be changed
 let user1={name : "amar ", emil : "user@gmail.com"}
 let user2=user1;
    user2.name="hitesh"
    console.log(user1.name) // hitesh
    console.log(user2.name) // hitesh
// premitive data types are copied by value -> stack
// they are  number , string , boolean , null , undefined , symbol , bigint
// non-primitive data types are copied by reference -> heap
// they are object , array , function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// strings
//const name= amar
const repocount=50
console.log(name+ repocount+ "value");

console.log(`helloo my name is ${name} and my repo count is ${repocount} `)
let myname= new String("amar_dixit")
console.log(myname)
// it gives the object of string not the primitive string
// it has some properties and methods which can be used to manipulate the string like key value pair
// it is not recommended to use the new String() constructor to create strings 
// because it creates an object instead of a primitive string.

// it gives the prototype of the string object which has some methods and properties
// it is recommended to use the primitive string instead of the new String() constructor
console.log(myname.toUpperCase())
console.log(myname.__proto__)
console.log(myname.__proto__.__proto__)
console.log(myname[0])
console.log(myname.length +"its length of the string ")
console.log(myname.charAt(2))
console.log(myname.indexOf("d"))
console.log(myname.slice(-2,4)) // can include negative index

const newstring= myname.substring(0,4)
console.log(newstring)
const newstring2=  "    hitesh - amar - dixit - "
console.log(newstring2.split("-")   ) // it gives an array of strings
console.log(newstring2.trim())
const url = "https://www.youtube.com/channel/UCWv7vMbMWH4%20V0ZXdmDpPBA"

console.log (url.replace("%20","-"))
console.log(url.includes("youtube") ? "yes it includes youtube" : "no it does not include youtube")



// it gives the prototype of the string object which has some methods and properties