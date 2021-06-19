/*
    Work on the problem above to dynamically print the name of 
    each animal and prepend it with ‘this is’ conditionally.
     Print ‘something else’ if the name doesn’t equal any of
      the names in the list.
*/
 petAnimals = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];

for (i = 0; i < petAnimals.length; i++) {
    if (petAnimals[i] === "rabbit") {
        console.log(petAnimals[i] + ":" + " is a rabbit");
    }
    else {
        console.log(petAnimals[i] + ":" + "is not a rabbit");
    }

}