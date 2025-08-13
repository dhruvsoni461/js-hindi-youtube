//memory allocation are of 2 types 
//1. stack
//2. heap

// stack //


let ytName= "dhruv"
let anotherYtName= ytName

console.log(anotherYtName);  //dhruv

anotherYtName= "aman"

console.log(anotherYtName); //aman



// heap //

let user1 = {
    email: "dhruv123@gmail.com",
    upi: "user@hdfc"
}

let user2= user1

console.log(user2);  //dhruv

user2.email= "aman123@gmail.com"
user2.upi= "user@bob"

console.log(user2);  //aman
console.log(user1);  //aman