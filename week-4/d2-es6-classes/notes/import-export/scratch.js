// console.log(module.exports);

// // module.exports = 'Hello world'
// const message = 'Hello world';
// const goodbye = 'goodbye'
// module.exports = { message, goodbye }
// console.log(module.exports);
// console.log(this)

const shane = {
    username: 'swilkey',
    email: 'swilkey@appacademy.io',
    password: 'supersecurepassword',
    greet: function() {
        console.log(`Hi my name is ${this.username}`)
    }
}

const gary = {
    username: 'garebear',
    email: 'gsong@appacemy.io',
    password: 'iloveunicorns',
    greet: function() {
        console.log(`Hi my name is ${this.username}`)
    }
}

// console.log(shane)
// console.log(gary)

class User {
    constructor(username, email, password, friends=[], ...args) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.friends = friends

        if (!password) throw new Error('Must have password')
    }

    greet() {
        console.log(`Hi my name is ${this.username}`)
    }

    static introduce(users) {
        
    }
}

const shane2 = new User('swilkey', 'swilkey@appacademy.io', 'superstrongpassword');
const gary2 = new User('garebear', 'gsong@appacdemy.io', 'iloveunicorns');
// const briana = new User('brirob', 'brobinson@appacademy.io')
// shane2.greet();
// gary2.greet();
console.log(shane2)
console.log(gary2)
// console.log(briana)

User.introduce([shane2, gary2])

// {
//      username: 'swilkey'
//}