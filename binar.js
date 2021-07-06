// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
// [9:34 AM] tests:
// [9:34 AM] Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

function convertToNum(arr) {
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    //  console.log(arr[arr.length-i-1]);
    // console.log(i);
    if (arr[arr.length - i - 1] == 1) {
      sum += 2 ** i;
    }
  }
  console.log(sum);
}

convertToNum([0, 0, 1, 0]);
convertToNum([1, 1, 1, 1]);
convertToNum([1, 0, 0, 1]);

function incrementString(strng) {
  strng.replace(/[^0-9]/g, "");
  console.log(typeof a);
}

incrementString("foobar000");
let newStr = "";
function reverseWords(str) {
  var res = str.split("").reverse().join("");
  console.log(res);
  resplit = res.split(" ");
  for (i = 0; i < resplit.length; i++) {
    newStr += resplit[resplit.length - 1 - i];
    newStr += " ";
  }
  console.log(newStr);
}

//   reverseWords('The quick brown fox jumps over the lazy dog.')

function getSum(a, b) {
  if (a !== b) {
    sum = 0;
    sum += a;
    sum += b;
    return sum;
  } else {
      return a
  }
}

// console.log(getSum(880, -200));

function accum(s) {
    str=''
      for(i=0; i<s.length; i++){
      str += s[i].toUpperCase()
      str += (s[i].toLowerCase()).repeat(i)
      str += "-"
    }
    return str.substring(0, str.length-1)
  }

  console.log((accum("ZpglnRxqenU")))
//   "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"


function findSum(n) {
    sum=0
    for (i=0; i<=n; i++){
      if (i%3==0 || i%5==0){
        sum += i}
    }
    return sum
  }

  console.log(findSum(5))