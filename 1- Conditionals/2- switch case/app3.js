
/*
  Suppose a situation in which you are expected to show 
  ‘less than 10’ if a number is less than 10. However, 
  if it’s greater than 10, print ‘greater than 10’.
   Also, deal with the case in which it’s equal to 10 with an appropriate message.

*/

let number = 10;

switch (number) {
    case 11:
        console.log("number is greater than 10");
        break;

    case 10:
        console.log("number is equal to ten");
        break;

    case 9:
        console.log("number is equal to ten");
        break;

    default:
        console.log("unknown");
        break;
}
