// //! Tricky Bits
// /**
//  * what is the output order of the letters and why?
//  * console.log(‘a’);
//  * let b = setTimeout(() => { console.log(‘b’) }, 1);
//  * let c = setTimeout(() => { console.log(‘c’) }, 10);
//  * let d = setTimeout(() => { console.log(‘d’) }, 0);
//  * console.log(‘e’)
//  */

// a, e, b, d, a


// /**
//  * what is the output and why ?
//  * let num = 0;
//  * async function increment() {
//  * num += await 2;
//  * console.log(num);
//  * } 
//  * increment();
//  * num + 1;
//  * console.log(num);
//  */
// /**
//  * what is the output and why ?
//  * function f() {
//  * console.log(‘var’, area);
//  * console.log(‘let’, name);
//  * let name = ‘Bert’;
//  * var area = ‘Geology’;
//  * }
//  * f()
//  */
// /**
//  * what would be the output and why ?
//  * const circle = {
//  *  radius: 10,
//  *  circumference: function() {
//  *      return (2*Math.PI * this.radius)
//  *  },
//  *  diameter() {
//  *      return (this.radius * 2)
//  *  },
//  *  area: () => Math.PI * Math.PI * this.radius
//  * }
//  *
//  * console.log(circle.area())
//  * console.log(circle.diameter())
//  * console.log(circle.circumference())
//  *
//  */
// /**
//  * What will the following code output?
//  * (function() {
//  * var a = b = 5;
//  * })();
//  * console.log(b);
//  */
// /**
//  * Consider the two functions below. Will they both return the same thing? Why or why not?
//  * function foo1()
//  * {
//  * return {
//  * bar: “hello”
//  * };
//  * }
//  * function foo2()
//  * {
//  *     return
//  * {
//  *    bar: “hello”
//  * };
//  * }
//  */
// /**
//  * Consider the code snippet below. What will the console output be and why?
//  * (function(x) {
//  * return (function(y) {
//  *   console.log(x);
//  *  })(2)
//  * })(1);
//  */
//  /**
//   * What will be the output of this code?
//   * var x = 21;
//   * var girl = function () {
//   *   console.log(x);
//   *  var x = 20;
//   * };
//   * girl ();
//   */
//   /**
//    * What do the following lines output, and why?
//    * console.log(1 < 2 < 3);
//    * console.log(3 > 2 > 1);
//    */
// //! Algorithms
// /**
//  * write a function to reverse a number
//  * ex: input: 3341 output: 1433
//  * without .reverse
//  */
// /**
//  * write a function that recieved 2 numbers
//  * and check if the first number is included
//  * in the second number
//  * without .includes
//  * ex: (53, 175331) => true
//  *     (73, 194378) => false
//  *     (1, 71) => true
//  *     (8, 492) => false
//  */
// /**
//  * ATM machine (כספומט) has only the following bills {500, 200, 100, 50, 20, 10}
//  * Find the minimum amount of bills in order to return the desired anount
//  * ex: (270) => 1*200 + 1*50 + 1*20
//  *     (280) => 1*200 + 4*20
//  *     (100) => 1*100
//  */
// /**
//  * write a functtion to determine if it recived the number
//  * of the params it expected
//  * ex:
//  * let f = function(a,b) {TODO: write code here}
//  * f(1); // false
//  * f(1,2); // true
//  * f(1,2,3); // false
//  */
// /**
//  * Create an array that is prepopulated with 5
//  * random numbers (try to do it in one line)
//  */
// /**
//  * write a function to determine if a number is an integer
//  * ex: 3 => true
//  *     3.5 => false
//  *     1.00000 => true
//  */
// /**
//  * Write a function to determine if 2 string are anagrams
//  * (same letters in different order)
//  * ex: (‘hello’, ‘jellow’) => false
//  *     (‘hello’, ‘loelh’) => true
//  */
// /**
//  *  write a function to check if passed string is a palindrome
//  * (palindromes: kayak, radar, redder, tuanaut, racecar)
//  */
// /**
//  * in one line, refactor the address. take ‘.’ and return ‘[.]’
//  * input: “1.1.11.1.1.11”
//  * output: “1[.]1[.]11[.]1[.]1[.]11"
//  */
// /**
//  * Write a function that would allow you to do this
//  * multiply(5)(6) => returns 30;
//  */
// /**
//  * Write a function that would allow you to do this
//  * multiply(5)(6)(2) => returns 60;
//  */
//  /**
//   * What is the output of the following code and why?
//   * const arrayOfOddNumbers = [1, 3, 5];
//   * arrayOfOddNumbers[100] = 199;
//   * console.log(arrayOfOddNumbers.length);
