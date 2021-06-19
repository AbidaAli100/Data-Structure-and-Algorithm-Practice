/*
You are given two numbers, num1 = 4 and num2 = 7.
 Add both and return true if both are equal to 11.
  Otherwise, return false, if they don’t equal 11.

 */


//switch case

let numb1 = 4;
let numb2 = 7;
let sum = (numb1 + numb2);

switch (sum) {
    case 11:
        console.log("sum is equal to case 11");
        break;

    case 12:
        console.log("sum is equal to case 12");
        break;

    default:
        console.log("not equal to 11");
        break;
}
