const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

const sculptureListLengths = []; // Create an empty array to store the results

for (let i = 0; i < sculptureList.length; i++) { // Loop through the list using a for loop
    const lengthObject = {}; // Create an empty object for storing lengths

    for (const element in sculptureList[i]) { // Loop through each key in the object
        // Trim spaces and calculate the length of the actual string value
        lengthObject[element] = sculptureList[i][element].length; 
    }

    sculptureListLengths[i] = Object.assign({}, lengthObject); // Assign the object to the array using indexing
}

console.log(sculptureListLengths); // Print the final result
