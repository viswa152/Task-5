// 1. Print odd numbers in an array
console.log("1. Print odd numbers in an array");
console.log("Input array is [3,4,5,6,8,9]");
let arr1 = [2, 3, 4, 5, 6, 8, 9];
let odd = arr1.filter((item) => item % 2 !== 0);
console.log("Odd Numbers are : ", odd);

// 2. Convert all the strings to title caps in a string array
console.log("\n2. Convert all the strings to title caps in a string array");
console.log('Input is : ["I", "have", "joined", "Guvi", "ZEN", "Class"]');

var strAr = ["I", "have", "joined", "Guvi", "ZEN", "Class"];
var title = strAr.map((word) => {
  let output = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return output;
});
console.log("Output is : ", title);

// 3. Sum of all numbers in an array
console.log("\n3. Sum of all numbers in an array");
console.log("Input is : [10,20,30,40,50]");

let arr2 = [10, 20, 30, 40, 50];
var sum = arr2.reduce((prevValue, curValue) => prevValue + curValue);
console.log("sum is : ", sum);

// 4. Return all the prime numbers in an array
console.log("\n4. Return all the prime numbers in an array");
console.log("Input is : [2,,5,9,15,22,31,37]");

let primeArr = [2, 4, 5, 9, 15, 22, 31, 37];
let primeNum = primeArr.filter((num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    } else {
      true;
    }
  }
  return primeArr;
});
console.log("Prime Numbers in array : ", primeNum);

// 5. Return all the palindromes in an array
console.log("\n5. Return all the palindromes in an array---");
console.log("Input is  ['carecar', 'AAAA', 1232, 'did', 'cannot']");

(function (arr) {
  let res = arr.filter((item) => {
    let temp = String(item);
    let len = temp.length;
    for (i = 0; i <= len; i++) {
      if (temp[i] !== temp[len - 1 - i]) return false;
    } // end of for condition
    return true;
  });
  console.log(res);
})(["carecar", "AAAA", 12321, "did", "cannot"]);
