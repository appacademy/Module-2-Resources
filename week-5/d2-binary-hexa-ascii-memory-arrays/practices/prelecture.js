const str = `Hello`; 
let str2 = str;
str2 += "!";

console.log(str, str2);

const str4 = new String("asdlfkj");

console.log(str4)
// class String {
//   constructor(string) {
//     this.data = [];
//     for (let i = 0; i < string.length; i++) {
//       this.data.push(string[i]);
//     }
//   }

//   toLowerCase() {
//     return; // current string w/ all lower case letters 
//   }
// }

// ["H", "e", "l", "l", "o"]

// str.toLowerCase();

// "hello"