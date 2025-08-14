let myDate = new Date()

// console.log(myDate);

//now there are somme functions in JS to filter the dates

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let createDate = new Date(2023, 0 , 25)   // month indexing start from 0
// console.log(createDate.toLocaleString());

let createDate_2 = new Date("01-03-2025")
// console.log(createDate_2.toLocaleString());


let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);     //+1 to print the real month cause of indexing



console.log(`todays date is ${newDate.toLocaleDateString()} and time is ${newDate.toTimeString()}` );




