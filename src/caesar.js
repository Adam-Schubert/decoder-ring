// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // Creates a variable that's equal to a series of functions
  const lookup = [
    // Creates a lookup array which you'll need to reference later
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function caesar(input, shift, encode = true) {
    // Takes in an input string, a shift number, and a boolean that represents whether or not to encode or decode
    input = input.toLowerCase(); // Transforms input to all lower case letters so the result will be case insensitive
    let codedMessage = ""; // Creates an empty string to store the result
    if (encode === false) {
      // Before anything is done to the result, check to see whether encode is equal to true or false
      shift = shift * -1; // If false, reverse the mathematical sign of shift (in other words, this will activate "decode mode")
    }

    if (!shift || shift === 0 || shift > 25 || shift < -25) return false; // Returns false early if these conditions are true

    for (let char in input) {
      // Loops through every character in the input string
      if (!lookup.includes(input[char])) {
        // If the current char in input is NOT included in the lookup array...
        codedMessage += input[char]; // ...simply add the char to the result!
      }
      if (lookup.includes(input[char])) {
        // If the char IS included in the lookup array...
        index = lookup.indexOf(input[char]);
        shiftedIndex = index + shift; // ...calculate the shifted index...
        if (shiftedIndex > lookup.length) {
          // ...if the shifted index is greater that the length of lookup...
          lookup.push(...lookup); // ...add all of lookup to the end of lookup, so that it now contains indexes over 25
        }
        if (shiftedIndex < 0) {
          // If the shifted index is a negative number...
          shiftedIndex = lookup.length + shiftedIndex; // ...you just need to add the length of lookup to the shifted index
        }
        codedMessage += lookup[shiftedIndex]; // ...then add the char at the matching index to the result
      }
    }
    return codedMessage; // Returns the result within the appropriate scope
  }

  return {
    // Returns all of caesar
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
