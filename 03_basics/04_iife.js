//-------------------Immediately Invoked Function Expression (IIFE)-------------------------------


(() => {
    //unnamed IIFE
    console.log("IIFE with arrow function executed!");
})();

((name)=>{
    //paramiterised IIFE
     console.log(`hey my name is ${name}`); 
})("dhruv");

(function addition(num1 , num2) {
    //named IIFE
    console.log(num1 + num2);
})(5,6)