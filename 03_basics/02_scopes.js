//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);



//-------------------------------------nesterd scopes=>---------------------------------



function one (){
    const username1= "dhruv"
    function two() {
        const username2= "aman"     
        // console.log(username1);
    }
    // console.log(username2);
    
    two()
}
// console.log(username1);

one()


//----------------------declatration of function in 2 diff ways=>-----------------------



// console.log(addOne(5));    //EXECUTABLE
function addOne(num) {
    return num + 1                             //mthd-1
}
console.log(addOne(5));



// console.log(addTwo(5));    //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num+1                                //mthd-2
}
console.log(addTwo(5));

