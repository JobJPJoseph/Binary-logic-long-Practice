// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  // Your code here

  let word = '';

  const binaryArr = binaryStringToArray(str);

  for (let i = 0; i < binaryArr.length; i++) {
    const binarySequence = binaryArr[i];

    const upper = asciiCharUpper(binarySequence);
    const lower = asciiCharLower(binarySequence);
    const special = specialChar(binarySequence);

    if (upper !== false) word = word + upper;
    if (lower !== false) word = word + lower;
    if (special !== false) word = word + special;
  }

  return word;
};

const asciiCharUpper = binary => {
  const obj = {
    '01000001': 'A',
    '01000010': 'B',
    '01000011': 'C',
    '01000100': 'D',
    '01000101': 'E',
    '01000110': 'F',
    '01000111': 'G',
    '01001000': 'H',
    '01001001': 'I',
    '01001010': 'J',
    '01001011': 'K',
    '01001100': 'L',
    '01001101': 'M',
    '01001110': 'N',
    '01001111': 'O',
    '01010000': 'P',
    '01010001': 'Q',
    '01010010': 'R',
    '01010011': 'S',
    '01010100': 'T',
    '01010101': 'U',
    '01010110': 'V',
    '01010111': 'W',
    '01011000': 'X',
    '01011001': 'Y',
    '01011010': 'Z'
  };

  const result = obj[binary];
  return (result) ? result : false;
}

const asciiCharLower = binary => {
  const obj = {
    '01100001': 'a',
    '01100010': 'b',
    '01100011': 'c',
    '01100100': 'd',
    '01100101': 'e',
    '01100110': 'f',
    '01100111': 'g',
    '01101000': 'h',
    '01101001': 'i',
    '01101010': 'j',
    '01101011': 'k',
    '01101100': 'l',
    '01101101': 'm',
    '01101110': 'n',
    '01101111': 'o',
    '01110000': 'p',
    '01110001': 'q',
    '01110010': 'r',
    '01110011': 's',
    '01110100': 't',
    '01110101': 'u',
    '01110110': 'v',
    '01110111': 'w',
    '01111000': 'x',
    '01111001': 'y',
    '01111010': 'z'
  };

  const result = obj[binary];
  return (result) ? result : false;
}

const specialChar = binary => {

  const obj = {
    '00100000': ' ',
    '00100001': '!',
    '00100010': '"',
    '00100011': '#',
    '00100100': '$',
    '00100101': '%',
    '00100110': '&',
    '00101000': '(',
    '00101001': ')',
    '00101010': '*',
    '00101011': '+',
    '00101100': ',',
    '00101101': '-',
    '00101110': '.',
    '00101111': '/'
  };

  const result = obj[binary];
  return (result) ? result : false;
}


/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
