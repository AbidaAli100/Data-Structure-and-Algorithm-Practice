/*
    You need to write a function that prints out ‘wild animals’ 
    if the names of lion and leopard are passed to it. However, 
    if I pass the names of cats and rabbits to it, it prints ‘pet animals’.
     However, if I pass any other name to it, it says ‘unknown’
*/

function Animals() {
    let animal = "lion";
    switch (animal) {
        case "lion":
        case "leoperd":
            console.log("wild animal");
            break;

        case "cat":
        case "rabbit":
            console.log("pet animal");
            break;

        default:
            console.log("UNKNOWN");
    }
}
Animals()
