// we can call objects in the function too 

// const User = {
//     name: "Dhruv",
//     product: "denim jeans",
//     price: "2999/-"
// }

// function handleObjects(anyObjects) {    //here we can't just pass User bcz fun do not know about obj
//     console.log(`hey ${anyObjects.name} you bought a ${anyObjects.product} which costs ${anyObjects.price}`);   
// }

// handleObjects(User)


//--------------------------above code can also be writen as =>---------------------------


// function handleObjects(anyObjects) {    //here we can't just pass User bcz fun do not know about obj
//     console.log(`hey ${anyObjects.name} you bought a ${anyObjects.product} which costs ${anyObjects.price}`);   
// }

// handleObjects({ 
//     name: "Dhruv",
//     product: "denim jeans",
//     price: "2999/-"
// })



//--------------------------we can also pass array in the function =>---------------------------



const getArrays = [
    {
        name: "Dhruv",
        product: "denim shirt",
        price: 2999
    },
    {
        name: "aman",
        product: "t-shirt",
        price: 999
    },
    {
        name: "anirudh",
        product: "check shirt",
        price: 1999
    }
]

function handleObjects(arrayCall) {
    console.log(arrayCall[0]);
    console.log(Object.keys(arrayCall[0]).join(", "));
    console.log(Object.values(arrayCall[0]).join(", "))    
}

handleObjects(getArrays)