const myArr= [0, 1, 2, 3, 4, 5]
const newArr= myArr.join()
// console.log(`orignal arry is ${myArr} and after joi  function array will be ${newArr}`);

// console.log(`datatype of myArr is ${typeof myArr} datatype of newArr is ${typeof newArr}`)


const myArr1 = myArr.slice(1,4)
console.log(`new array after using slice() function ${myArr1}`);   //1,2,3
console.log(`old array after using slice() function ${myArr}`);   //0,1,2,3,4,5
const myArr2 = myArr.splice(1,4)
console.log(`new array after using splice() function ${myArr2}`);   //1,2,3,4
console.log(`old array after using splice() function ${myArr}`);    //0,5



