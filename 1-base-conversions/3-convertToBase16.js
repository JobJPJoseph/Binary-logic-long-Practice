// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here

  let str = '';
  const binaryHex = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'a',
    '1011': 'b',
    '1100': 'c',
    '1101': 'd',
    '1110': 'e',
    '1111': 'f'
  };

  if (typeof element === 'number') element = covertNumToBinary(element);

  for (let i = 2; i < element.length; i += 4) {
    const binaryStr = element.slice(i, i + 4);

    str = str + binaryHex[binaryStr];
  }

  return '0x' + str;
}

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

  return '0b' + str;
}

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
