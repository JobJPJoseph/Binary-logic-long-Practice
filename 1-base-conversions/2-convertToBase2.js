// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here

  /*
  We will create and empty string
  We need to test if the element is a integer or string
  if string
    We will iterate backwards to excluding 1
    We will test if the element is an integer
      if true, we will parse the element and call covertNumToBinary()
        We will add the result to the front of the empty string
      if false, we will need to reference hexBinary
        add the result to the front of the empty string
  if integer
    All we need to do is just call covertNumToBinary() and save the result

  last return 0b + String(str);

  We need to shave off the extra 0s
  */

  let str = '';
  const hexBinary = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'a': '1010',
    'b': '1011',
    'c': '1100',
    'd': '1101',
    'e': '1110',
    'f': '1111'
  };

  if (Number.isInteger(element)) {

    return '0b' + covertNumToBinary(element);
  } else {

    for (let i = element.length - 1; i > 1; i--) {
      const elem = element[i];

      str = hexBinary[elem] + str;
    }

  }

  return '0b' + shaveExtraZeros(str);
};

const shaveExtraZeros = str => {
  const index = str.indexOf('1');
  return str.slice(index);
}

const covertNumToBinary = num => {
  /*
  This will recieve integer
  The goal here is to constantly divide the num
  We will have and empty string.

    if the number is modulo by 2, we will add 0 to the empty string.
    if the number is not modulo by 2, we will add 1 to the empty string.
    However, we want the divided result. We will continue divide it till result is less than 1 which will give us our last 1
    The numbers will be added to the to the front of the empty string
*/

  let str = "";

  while(num >= 1) {

    if (num % 2 === 0) {
      str = '0' + str;
    } else {
      str = '1' + str;
    }

    num = Math.floor(num / 2);
  }

  return str;
}

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
