const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => { // (String not Hex)
  // Your code here
  // String.charCodeAt(index) convert to the Decimal
  console.log(str.charCodeAt(0))

  // We are going to covert the into its decimal counterpart.
  // We will call overtNumToBinary() and withing the call, call String.charCodeAt(index)
  // We will add the result to an empty string.

  let result = '';

  for (let i = 0; i < str.length; i++ ) {
    result = result + covertNumToBinary(str.charCodeAt(i));
  }

  return result;
};

const covertNumToBinary = num => {
  let str = "";

  while(num > 0) {

    if (num % 2 === 0) {
      str = '0' + str;
    } else {
      str = '1' + str;
    }

    num = Math.floor(num / 2);
  }

  while (str.length % 4 !== 0) {
    str = '0' + str;
  }

  return str;
}
/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
