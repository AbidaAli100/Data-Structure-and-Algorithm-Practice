/*
  Suppose a situation in which you are expected to show 
  ‘less than 10’ if a number is less than 10. However, 
  if it’s greater than 10, print ‘greater than 10’.
   Also, deal with the case in which it’s equal to 10 with an appropriate message.

*/

let number = 11;

if (number < 10) {
    console.log("the number is less than 10");
}
else if (number > 10) {
    console.log("number is equal to 10");
}
else{
    console.log("number is greater than 10");
}