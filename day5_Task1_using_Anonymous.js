//1. Print odd numbers in an array
console.log("1. Print odd numbers in an array [1,2,3,4,5] ");
var oddNumber = function (arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) res.push(arr[i]);
  }
  return res;
};
console.log("Output Using Anonymous Function " + oddNumber([1, 2, 3, 4, 5]));

// 2.Convert all the strings to title caps in a string array
console.log("\n2.Convert all the strings to title caps in a string array");
console.log('Input is : ["I", "have", "joined", "Guvi", "ZEN", "Class"]');
var strArr = ["I", "have", "joined", "Guvi", "ZEN", "Class"];
var title = function (arr) {
  const uppercased = arr.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  return uppercased;
};
console.log("output is : ", title(strArr));

//3. Sum of all numbers in an array
console.log("\n3.Sum of all numbers in an array");
console.log("Input is [1,2,3,4,5]");
let arrNum = [1, 2, 3, 4, 5];
var sum = function (arr) {
  var sumArr = 0;
  for (let index = 0; index < arr.length; index++) {
    sumArr += arr[index];
    console.log();
  }
  return sumArr;
};

console.log("Sum of all numbers is : ", sum(arrNum));

//4. Return all the prime numbers in an array
// 1 is neither prime nor composite number.
console.log("\n4. Return all the prime numbers in an array");
console.log("Input is [2,4,5,7,9]");
let primeNumArr = [2, 4, 5, 7, 9];
var primeNum = function (numArr) {
  numArr = numArr.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  return numArr;
};
console.log("Prime numbers are : ", primeNum(primeNumArr));

//5. Return all the palindromes in an array
console.log("\n5. Return all the palindromes in an array");
console.log("Input is  ['carecar', 'AAAA', 12321, 'did', 'cannot']");

let palindromesArr = ["carecar", "AAAA", 12321, "did", "cannot"];
var isPalimdrome = function (palindromesArr) {
  return palindromesArr.filter((element) => {
    let str = String(element);
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  });
};

console.log("palindromes are : " + isPalimdrome(palindromesArr));

//6. Return median of two sorted arrays of the same size

console.log("\n6. Return median of two sorted arrays of the same size");
console.log("Input is   arr1 = [ 1,2,3,4]; \n           arr2 = [5,6,7,8]");

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
var median = function (ar1, ar2) {
  var n = ar2.length;
  var i = 0; /* Current index of i/p array ar1[] */
  var j = 0; /* Current index of i/p array ar2[] */
  var count;
  var m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
};
console.log("median is : " + median(arr1, arr2));

//7. Remove duplicates from an array

console.log("\n7. Remove duplicates from an array");
console.log("Input is [1,2,3,5,2,3,6]");
var arr = [1, 2, 3, 5, 2, 3, 6];

var removeDup = function (arr) {
  arr = arr.filter((item) => {
    if (arr.lastIndexOf(item) !== arr.indexOf(item)) {
      return false;
    }
    return true;
  });
  return arr;
};
console.log("After removing duplicates array is : ", removeDup(arr));

//8. Rotate an array by k times

console.log("\n8. Rotate an array by k times");
console.log("Input is [1,2,3,4,5,6]");
let arrRotate = [1, 2, 3, 4, 5, 6];

var rotateByK = function (arr, k) {
  let temp;
  let length = arr.length;
  for (let i = 0; i < k; i++) {
    temp = arr[0];
    for (let j = 0; j < length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[length - 1] = temp;
  }

  /* for rotating to right
        for(let i = 0; i < k; i++){
        temp = arr[length - 1];
        for(let j = length - 1; j >= 0; j--){
        arr[j] = arr[j - 1]
        }
        arr[0] = temp  ;
    }
    */
  return arr;
};
console.log("After rotating array is : ", rotateByK(arrRotate, 2));
