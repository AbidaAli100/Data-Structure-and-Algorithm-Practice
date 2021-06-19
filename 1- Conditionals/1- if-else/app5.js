/*
    You need to write a function that prints out ‘wild animals’ 
    if the names of lion and leopard are passed to it. However, 
    if I pass the names of cats and rabbits to it, it prints ‘pet animals’.
     However, if I pass any other name to it, it says ‘unknown’
*/

function Animals() {
    let animal = "lion"
    if ((animal == "lion") || (animal == "leopard")) {
        console.log("wild animal");
    }
    else if ((animal == cat) || (animal == rabbit)) {
        console.log("pet animals");
    }
    else {
        console.log("unknown");
    }
}
Animals()