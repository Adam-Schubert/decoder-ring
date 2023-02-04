// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let lookupAlphabet = "abcdefghijklmnopqrstuvwxyz"; // Declares a normal alphabet to refernce later

  function substitution(input, alphabet, encode = true) {
    // Takes in an input as a string, a coding alphabet, and a boolean that represents whether to encode or decode
    input = input.toLowerCase(); // Transforms input to all lower case
    anyRepeatsCheck = new Set(alphabet); // Uses a anyRepeatsCheck to check alphabet for repeats
    if (
      // If any of these conditions are true...
      !alphabet ||
      alphabet.length !== 26 ||
      [...anyRepeatsCheck].length !== 26
    )
      return false; // ...return false
    const normalAlphabet = lookupAlphabet.split(""); // Splits the regular alphabet and turns it into an array
    let codedMessage = []; // Declares an array to store the coded message
    if (encode === true) {
      // If encode is true...
      for (let i = 0; i < 26; i++) {
        // ...loop through the normal alphabet and alphabet and add the new char to codedMessage
        codedMessage[normalAlphabet[i]] = alphabet[i];
      }
    } else {
      // Otherwise...
      for (let i = 0; i < 26; i++) {
        // ...loop again...
        codedMessage[alphabet[i]] = normalAlphabet[i]; // ...do the opposite
      }
    }
    let finalCodedMessage = input.split("").map((letter) => {
      // Declares a final draft of the coded message, which splits input and maps it
      if (letter === " ") {
        // If the char is a space...
        return " "; // ...add a space to the final message
      } else {
        // Otherwise...
        return codedMessage[letter]; // ...add the char
      }
    });
    return finalCodedMessage.join(""); // Joins and returns the final message
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
