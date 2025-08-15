function add2no (num1, num2) {
    // let result = num1 + num2;
    // return result                 // can also be written like this

    // return num1+num2
}

const result = add2no(3,5)
// console.log(`result: ${result}`);


//-------------------------------------------------------------------------------//

function welcomeUser(username){
     if (!username) {                    // means if username is not given '!'
        return `please enter the username`;
     }else{
        return `hey ${username} welcome to website`;        
     }
}

const result2 = welcomeUser("dhruv")       // these 2 lines can be also writen as console.log(welcomeUser("dhruv"));
console.log(result2);

//----------------------------------------------------------------------------------------------//

// SOMETIMES WE FACE GOT A PROBLEM THAT WE GET MORE THAN 2,3 VALUE SUCH AS A USER IN E-COMERECE
// WEBSITE PRESS ADD TO CARD BUTTON MANY TIMES THEN WE CANT PASS VALUE ONE BY ONE THUS, THERE IS
// AN OPERATOR NAME 'REST' OPERATOR '...' WHICH CARRIES ALL THE VALUE AND PRINT ALL AT ONCE




function addToCartButton(value1, ...total){      //...total now can count al the values that are passed
    console.log(value1);
    
    return total
}

console.log(addToCartButton(100, 200 , 300 , 400));

