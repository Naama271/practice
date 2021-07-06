//   what is the output and why ?
// let num = 0;
// async function increment() {
// num += await 2;
// console.log(num);
// }
// increment();
// num + 1;
// console.log(num);

//my answer: 1 ,3
//correct: 0, 2 - the async function is not hoisted so it prints line 10 (wasn't affectted by line 9) and then line 6 is printed

// function f() {
// console.log('var', area);
// console.log('let', name);
// let name = 'Bert';
// var area = 'Geology';
// }
// f()

// undifined, error
// var undifined let error
// var is hoisted let isn't

const circle = {
  radius: 10,
  circumference: function () {
    return 2 * Math.PI * this.radius;
  },
  diameter() {
    return this.radius * 2;
  },
  area: () => Math.PI * Math.PI * this.radius,
};

console.log(circle.area()); //  the answer
console.log(circle.diameter()); // undefined
console.log(circle.circumference()); // undefined

//  * console.log(circle.area())    //  NaN
//  * console.log(circle.diameter())  // 20
//  * console.log(circle.circumference()) // 62

// (function () {
//   console.log('Immediately invoked function execution');
// })();

// What will the following code output?

// var a = b = 5;
// console.log(a);

// (function() {
// var a = b = 5;
// console.log(a);
// })();
// console.log(b);

//5
//undifined - the var is local

//  What is the output of the following code and why?
const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers);

//  * Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1() {
  return {
    bar: "hello",
  };
}
function foo2() {
  return;
  {
    bar: "hello";
  }
}

// foo1()
// foo2()

// the first will return the 2nd won't because of the syntax

//  /
// /
//   Consider the code snippet below. What will the console output be and why?
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
//  /1 is printed as x
//  /

//    What will be the output of this code?
var x = 21;
var girl = function () {
  console.log("girl");
  console.log(x);
  var x = 20;
};
girl();
//   /
//   /21

// write the function isAnagram
var isAnagram = function (test, original) {
  let sort1 = test.toLowerCase().split("").sort().join();
  let sort2 = original.toLowerCase().split("").sort().join();

  console.log(sort1, sort2);

  return sort1 === sort2;

  //     for (let i = 0; i < test.length; i++) {
  //     for (let x = 0; x < original.length; x++) {
  //     if(test[i] !== original[x]) {
  //       false :  true}
  //     }
};

console.log(isAnagram("foefet", "toffee"));

function titleCase(title, minorWords) {
  let splitTitle = title.toLowerCase().split(" ");
  let minorWordsplit = minorWords.toLowerCase().split(" ");
  let answer = "";
  console.log(splitTitle, minorWordsplit);
 
 
      for (i = 0, j=0; i < splitTitle.length; i++, j++){
      if (splitTitle[i] !== minorWordsplit[j]) {
        answer += splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1);
        answer += " ";
      } else {
        answer += minorWordsplit[j];
        answer += " ";
      }
    }
 
  return answer;
}

console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));


function sumDigits(number) {
  var digits = number.toString().split('');
  var realDigits = digits.map(n=>parseInt(n))
  let answer = realDigits.reduce((a, b) => a + b, 0)
  return answer
  }

  console.log(sumDigits(10))
  console.log(sumDigits(99))

  function smallEnough(a, limit){

    // const reducer = (limit, currentValue) => limit > currentValue ? true : false ;
    //  return a.reduce((limit, currentValue) => limit > currentValue ? true : false )
     let arr= a.filter(n=> n>limit)
     console.log(arr)
     let ans = arr.length==0 ? true: false;
     return ans
    }


   console.log (smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))