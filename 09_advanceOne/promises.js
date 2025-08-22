//  async and await from resturant waiter example

//async → Function ke andar async kaam hoga (jo promise return karega).i.e// DB calls, cryptography, network
//await → Ruk ja jab tak wo promise complete nahi hota.
//setTimeout = kitchen me pizza ban raha hai (time lag raha hai).
//resolve() = kitchen waiter ko bolta hai: "Pizza ready hai ✅".
//reject("error") → Kitchen me problem ❌ (failure)
//.then() = waiter (JS) jaake customer ko pizza serve karta hai.
//.catch() → Waiter customer ko batayega ki pizza nahi ban saka
//.finally() → Waiter table clean karega, chahe pizza bana ho ya nahi


// -----------------method one to write--------------------------------------------------

const promiseOne = new Promise( function (resolve , reject){
    setTimeout(function (){
        console.log("1). aysnc task is done");
        resolve()
    }, 1000)
})

promiseOne.then( function () {
    console.log("  promise is completed");
    
})


//--------------------method two to write---------------------------------------------------

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("2). aysnc task2 is done");
        resolve()
    },1000)
}).then( function (){
    console.log("  promise is completed");
    
})


//-------------------method 3 for returning something from database i.e. user detail----------

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("3). async task3 is done");
        
        resolve({
            username: "dhruv461",
            email: "dhruv@google.com",
        })
    },1000)
})

promiseThree.then( function(user){
    console.log(user);
    
})


//----------------------role of reject---------------------------------------------------------


const promiseFour = new Promise(function (resolve , reject) {
    setTimeout( function () {
        let error = false
        // let error = true

        if (!error) {
            resolve({
                username: "dhruv146",
                password: 12345
            })
        }else{
            console.log("4). "); 
            reject("  ERROR: something went wrong")
        }

    }, 1000 );
})

promiseFour
.then((user) => {
    console.log("4). ");               //.then() -> .catch() -> .finally()
    console.log(user);                
})
.catch((error) => {                   // we can do multiple chaining of 'then' also
    console.log(error);    
})
.finally(() => {
    console.log("  promise is either resolved or rejected");    
})


//--------------------we can do the same by using async/await-----------------------------------


const promiseFive = new Promise(function (resolve , reject) {
    setTimeout( function () {
        let error = false
        // let error = true
                                              //promise is an object
        if (!error) {
            resolve({
                username: "dhruv146",
                product: "denim shirt",
                price: 1999,
            })
        }else{
            console.log("5). "); 
            reject("  ERROR: something went wrong")
        }

    }, 1000 );
})

async function consumePromise5() {
    try { 
        const response = await promiseFive
        console.log("5). ");
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }    
}
consumePromise5();



//------------------all about fetch()--------------------------------------------------------------


async function getData() {
    try {
        const sampleApi = await fetch("https://fake-json-api.mock.beeceptor.com/companies")   
        //Get a list of ten random companies.
        const data = await sampleApi.json(); 
        //conver the data into json formate
        console.log("6). ");
                  
        console.log(data);
        //get the data 
        
    } catch (error) {
        console.log(error);
        
    } finally {
        console.log("Fetch completed");
        
    }
}

getData()