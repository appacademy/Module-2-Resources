const user = {
    name: 'shane',
    occupation: 'instructor',
    age: 41,
    introduce:  () => {
        console.log(this)
        console.log(`Hi, my name is ${this.name}.`)
    }
}


// console.log(user)
// const user2 = {
//     name: 'Gary', 
//     occupation: 'instructor',
//     age: 21,
//     introduce:  () => console.log(`Hi, my name is ${this.name}.`)
// }


class User {
    constructor(name, occupation, age) {
        this.name = name;
        this.occupation = occupation;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}.`)
    }

    static introduceUsers(bananas) {
        bananas.forEach(banana => banana.introduce());
    }
}

const shane = new User('shane', 'instructor', 41);
// console.log(shane)
// shane.introduce()

const gary = new User('gary', 'instructor', 21);
// console.log(gary)

// gary.introduce()
// User.introduceUsers([shane, gary]);

const arr = [1,2,3];

arr.push(4);

const arr2 = new Array()

// console.log(Array.isArray(arr2))


