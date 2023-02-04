// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitution = require("./substitution");

const polybiusModule = (function () {
  let encodeLookup = {
    // Creates a lookup to use if you're encoding
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  let decodeSquare = [
    // Declares a multi-deminsional array to store the polybius square
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z", " "],
  ];

  function polybius(input, encode = true) {
    // Takes in an input string and a boolean that represents whether to encode or decode
    input = input.toLowerCase(); // Transforms input to all lower case letters so the result will be case insensitive
    let codedMessage = ""; // Creates an empty string to store the result
    if (encode === true) {
      // If encode is true, activate encode mode, and:
      for (let char in input) {
        // For each char in the input...
        if (`${input[char]}` in encodeLookup === false) {
          // ...if the char CAN'T be found within the encodeLookup...
          codedMessage += input[char]; // ... simply add the char to the result message
        }
        if (`${input[char]}` in encodeLookup === true) {
          // If the char CAN be found in the encodeLookup...
          codedMessage += Object.values(`${encodeLookup[input[char]]}`); // ...add the value associated with the char's key in encodeLookup to the result message
        }
      }
      return codedMessage.split(",").join(""); // Return the formatted message
    } else {
      // If encode is equal to false, activate decode mode and:
      let spacesAdded = input.replace(" ", 65); // Replace all spaces with a place holder value
      if (spacesAdded.length % 2 !== 0) return false; // Return false if the input does not hold an even amount of char's
      let coordinates = spacesAdded.match(/..?/g); // Declares a coordinate value
      codedMessage = coordinates.map((yx) => {
        // Sets the result message to equal a somewhat complex series of declarations and functions that allow you to get the char's from the decodeSquare
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return decodeSquare[rowIndex][columnIndex];
      });
    }
    return codedMessage.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
