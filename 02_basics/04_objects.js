const tinderUser = new Object()    //creating a singleton obj
const tinderUser2 = {}            // creating a non-singleton obj

// console.log(tinderUser);       // {}
// console.log(tinderUser2);      // {}


//-------------------------------------------------------------------------------//


const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"a",
    5:"b",
    6:"c"
}

// const obj3 = {obj1,obj2}
// console.log(obj3);    // yes this merge the objs but do not combine all the properties.

const obj3 = Object.assign(obj1,obj2)   //this function assign all the properties as a whole in a single obj3
// console.log(obj3);


//---------------------------------------------------------------------------------//


//IMPORTANT SYNTAX



const User = [
    {
       id : "001",
       email : "dhruv@google.com",
    },
    {
       id : "002",
       email : "adarsh@google.com",
    }
]

console.log(User[0].email);

console.log(Object.keys(User[0]));
console.log(Object.values(User[1]));
const {email} = User[0]
console.log(email);



