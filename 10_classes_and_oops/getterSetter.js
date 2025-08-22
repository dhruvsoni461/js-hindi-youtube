class User {
    constructor(name , productName, price) {
        this.UserName = name
        this.UserProductName = productName
        this.UserProductPrice = price
    }
}

const newUser = new User("dhruv" , "denim shirt" , "1999")
console.log(newUser);
console.log(User);
console.log(newUser.UserProductName);

class User2 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const dhruv = new User2("d@dhruv.ai", "abc")
console.log(dhruv.email);