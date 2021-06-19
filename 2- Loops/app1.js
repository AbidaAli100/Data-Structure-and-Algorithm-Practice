/*
  Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12].
  You need to find out whether a number is prime or not
  (Hint: a prime number is a number that is divisible by 1 and itself). 
  What approach would you take to do that? Support it with the relevant code.
*/

let number = [1, 8, 7, 3, 2, 9, 10, 12];

for (let i = 0; i < number.length; i++) {
  let result = number[i] % 2;
  if (result === 0) {
    console.log(number[i] + ":  not a prime number");
  }
  else {
    console.log(number[i] + ":   a prime number");
  }
}



