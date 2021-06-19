/*
Suppose you are given a number and you need
 to check whether it’s even or odd. How'd you do that?
 */

let numb = 14;

switch (true) {
    case (numb % 2 == 0):
        console.log(numb + " is an even number.");
        break;
    default:
        console.log(numb + "is an odd number.");
        break;
}