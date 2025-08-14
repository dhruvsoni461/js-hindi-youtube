const marvel_heros = ["ironman", "captain america", "thor"]
const dc_heros = ["superman", "batman", "wonder women"]
const indian_heros = ["saktiman", "nagraj"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);   //add the new array int the privious array considring as a whole.

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);      // merge 2 arrays . but the problem came when we got more than 2 arrays to merge.

const all_heros = [...dc_heros, ...marvel_heros, ...indian_heros]
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //you can give give depth of the array to where you want to solve .
// console.log(real_another_array);                      // [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray(all_heros));
console.log(Array.isArray("dhruv"));
console.log(Array.from("dhruv"));
console.log(Array.of(marvel_heros, dc_heros));
let a=100
let b=1067
let c=107
console.log(Array.of(a,b,c));