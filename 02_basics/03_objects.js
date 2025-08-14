const mySym = Symbol()

const User= {
    name: "dhruv soni",
    age: "20",
    "email": "dhruv@google.com",
    location: "bhopal",
    isloggedin: false,
    lastLoginDays: ["monday", "saturday"],
    [mySym] : "mykey1",
}

// console.log(User.age);     //20
// console.log(User["isloggedin"]);   //false
// console.log(User[mySym]);     //mykey1
// console.log(typeof user[mySym]);  //string


User.email = "dhruv@microsoft.com"
// Object.freeze(User)     //function used to freze the value which you don't want to change throughout the code
// User.email= "dhruv@cisco.com"
// console.log(User);
User.greeting = function(){
    console.log(`hello user,`);
}

console.log(User.greeting());

User.greeting2 = function(){
    console.log(`hello, ${this.name}`)  // here 'this' points 'User' bcz function dosen't knows what properties are inside User
}

console.log(User.greeting2());
