// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let total = 0; // 1c

  for (let i = 1; i <= n; i++) { // c2, n, c3
    total += i; // c4
  }

  return total; // c5
}  // O(n)
  
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let total = 0; //c1

  for (let i = 1; i <= n; i++) { // c2, n, c3
    total += addNums(i); // c4, n
  }

  return total; //c5
} // O (n^2)
  
}



module.exports = [addNums, addManyNums];
