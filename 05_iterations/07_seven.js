const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.map((val) => val * 10)     //[10,20,30,40,50,60,70,80,90,100]
                  .map((val) => val + 1)      //[11,21,31,41,51,61,71,81,91,101]
                  .filter((val) => val % 3 === 0)   //[21,51,81]

console.log(newArr); 
                  