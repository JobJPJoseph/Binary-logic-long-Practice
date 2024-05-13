// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here

  /*
  We are converting a string(integer) into a decimal
  We need to count down from string.length to excluding 1

  We are dealing with numbers 0, 1 and lowercase() letters
  We need to keep a separate counter for the base
  We need to keep a variable called sum

  we need to make a hash that contains the keys a..f with their values
  We can now test if the string is an integer, if fales its a hexvalue

  We need to test for if its a binary or hexidecimal

  */

  let base = 0;
  let sums = 0;
  const hexLetters = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };

  if (str.startsWith('0b')) {

    for (let i = str.length - 1; i > 1; i--) {
      const num = parseInt(str[i]);

      sums += (power(2, base) * num);
      base++;
    }

  } else {

    for(let i = str.length - 1; i > 1; i--) {
      const elem = parseInt(str[i]);

      if (Number.isInteger(elem)) {
        sums += (power(16, base) * elem);
      } else {
        sums += (power(16, base) * hexLetters[str[i]]);
      }

      base++;
    }

  }

  return sums;
};

const power = (num, base) => {
  if (base === 0) return 1

  let sums = 1;

  while(base) {
    sums *= num;
    base--;
  }

  return sums;
}

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
