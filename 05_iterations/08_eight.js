const shopingCart = [
    {
        productName: "adidas shoes",
        price: 4999
    },
    {
        productName: "shirt",
        price: 999
    },
    {
        productName: "nike t-shirt",
        price: 2999
    },
    {
        productName: "savage perfume",
        price: 14999
    },
]

const totalPrice = shopingCart.reduce((acc , item) => acc + item.price , 0)

console.log(`total bill to pay : ${totalPrice}`);
