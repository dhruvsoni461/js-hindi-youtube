// const User = {
//     username: "dhruv",
//     email: "dhruv@google.com",
//     wecolmeMsg: function () {
//         console.log(`${this.username}`);
//     },

// }
// User.wecolmeMsg();


//-------------------------what if wwe print only this keyword=>--------------------------


// const User = {
//     username: "dhruv",
//     email: "dhruv@google.com",
//     wecolmeMsg: function () {
//         console.log(`${this.username}`);
//         console.log(this);
        
//     },
    
// }
// User.wecolmeMsg();

// console.log(this);       // {}



//-----------------------what if this called inside function not obj=>---------------------




// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {          //here we can use '=>' function in place of 'function'
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// const chai = () => {          //here we can use '=>' function in place of 'function'
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


//-------------------------this key word=>-----------------------------------------------


// const add = (num1,num2) => (num1 + num2)
// console.log(add(2,3));

 const add = (num1,num2) => ({a:1})
 console.log(add(2,3));