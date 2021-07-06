//  * write a function to reverse a number
//  * ex: input: 3341 output: 1433

const reversedNum = (num) => {
  strNum = num.toString();
  let newNum = "";

  for (let i = 1; i <= strNum.length; i++) {
    newNum += strNum[strNum.length - i];
  }

  console.log(newNum);
};

reversedNum(12345);

//  * write a function that recieved 2 numbers
//  * and check if the first number is included
//  * in the second number
// //  * without .includes
//  * ex: (53, 175331) => true
//  *     (73, 194378) => false
//  *     (1, 71) => true
//  *     (8, 492) => false

const includeNum = (a, b) => {
  a = a.toString();
  b = b.toString();

  let sum = "";
  for (let i = 0; i < a.length; i++) {
    for (let x = 0; x < b.length; x++) {
      if (a[i] == b[x]) {
        sum += a[i];
      }
    }
  }

  console.log("includeNum", sum == a);
};

includeNum(34, 1234);

//  * ATM machine (כספומט) has only the following bills {500, 200, 100, 50, 20, 10}
//  * Find the minimum amount of bills in order to return the desired anount
//  * ex: (270) => 1*200 + 1*50 + 1*20
//  *     (280) => 1*200 + 4*20
//  *     (100) => 1*100

const atmBill = (amount) => {
  console.log(Math.floor(amount / 500) + `*500`);
  console.log(Math.floor((amount % 500) / 200) + `*200`);
  console.log(Math.floor((amount % 200) / 100) + `*100`);
  console.log(Math.floor((amount % 100) / 50) + `*50`);
  console.log(Math.floor((amount % 50) / 10) + `*10`);
};

atmBill(1270);

//  * write a functtion to determine if it recived the number
//  * of the params it expected
//  * ex:
//  * let f = function(a,b) {TODO: write code here}
//  * f(1); // false
//  * f(1,2); // true
//  * f(1,2,3); // false

let f = (a, b) => (a && b ? console.log(true) : console.log(false));

//   f(1); // false
//   f(1,2); // true
//   f(1,2,3); // false

//  * Create an array that is prepopulated with 5
//  * random numbers (try to do it in one line)
//  */

// array.fill(value, start, end)

let arr = [];
for (i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

let arr2 = [1, 1, 1, 1, 1];
arr2.fill(Math.random() * 100, 0, 5);
// console.log(arr2)

//  * write a function to determine if a number is an integer
//  * ex: 3 => true
//  *     3.5 => false
//  *     1.00000 => true

const isInt = (num) => {
  num % Math.floor(num) == 0 ? console.log(true) : console.log(false);
};

// isInt(100.53453)

//  * Write a function to determine if 2 string are anagrams
//  * (same letters in different order)
//  * ex: (‘hello’, ‘jellow’) => false
//  *     (‘hello’, ‘loelh’) => true

const isAngram = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    for (let x = 0; x < str2.length; x++) {
      str1[i] !== str2[x] ? false : true;
    }
  }
};

//   isAngram('naama', 'jmaan')
isAngram("taotao", "otoata");

//  *  write a function to check if passed string is a palindrome
//  * (palindromes: kayak, radar, redder, tuanaut, racecar)
//  */
// /**

const isPalind = (str) => {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] == str[str.length - i - 1]) {
      console.log(true);
      break;
    } else {
      console.log(false);
      break;
    }
  }
};
isPalind("naama");
isPalind("kayak");

//  * in one line, refactor the address. take ‘.’ and return ‘[.]’
//  * input: “1.1.11.1.1.11”
//  * output: “1[.]1[.]11[.]1[.]1[.]11"
//  */
// /**

let str = "1.1.11.1.1.11";
let newStr = str.replace(/\./g, "[.]");
console.log(newStr);

//  * Write a function that would allow you to do this
//  * multiply(5)(6) => returns 30;
//  */

const multiply2 = (a) => {
  return function (b) {
    console.log(a * b);
  };
};

multiply2(5)(6);

// /**
//  * Write a function that would allow you to do this
//  * multiply(5)(6)(2) => returns 60;
//  */

const multiply3 = (a) => {
  return function (b) {
    return function (c) {
      console.log(a * b * c);
    };
  };
};

multiply3(5)(6)(2);

function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let answer = max.toString() + " " + min.toString();
  console.log(answer);
}

highAndLow("1 2 3 4 5");

function order(words) {
  sorted = words.split(" ");
  console.log(sorted);
  mapped = sorted.map((n) => n.split("").sort().join(""));

  answer = "";
  for (i = 1; i < sorted.length; i++) {
    if (sorted[i].includes(i)) {
      console.log(i, sorted[i]);
    }
  }
}

order("is2 Thi1s T4est 3a");

// function sortArray(array) {
//     newArr=[]
//     sorted= array.sort((a, b) => a - b)
//     for(let i=0; i<array.length; i++){
//       if(array[i] % 2 != 0 && ){
//         newArr.push(array[i])
      
//       }else{
//         newArr.push(array[i])
//       }
//     }
//     console.log( sorted)
//     // console.log( newArr.sort())
//   }

//   sortArray([5, 3, 2, 8, 1, 4])
//   [1, 3, 2, 8, 5, 4]

function getMiddle(s)
{
 if( s.length%2 !== 0 ){ 
  return s[s.length/2]  
 }else{
   mid1 = s[s.length/2-1]  
   mid2 = s[s.length/2]
   str = mid1+ mid2
   
  console.log( typeof(str)) 
  typeof(str)
 }
}

getMiddle('middle')