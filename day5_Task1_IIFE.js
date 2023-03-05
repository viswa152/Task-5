//1. Print odd numbers in an array
console.log("1. Print odd numbers in an array [1,2,3,4,5] ");
(function (arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) res.push(arr[i]);
  }
  console.log("odd numbers in array are", res);
})([1, 2, 3, 4, 5]);

// 2.Convert all the strings to title caps in a string array
console.log("\n2.Convert all the strings to title caps in a string array");
console.log('Input is : ["I", "have", "joined", "Guvi", "ZEN", "Class"]');

(function (arr) {
  let res = arr.map((element) => {
    return element[0].toUpperCase() + element.slice(1).toLowerCase();
  });
  console.log("Title Case array strings are : ", res);
})(["I", "have", "joined", "Guvi", "ZEN", "Class"]);

//3. Sum of all numbers in an array
console.log("\n3.Sum of all numbers in an array");
console.log("Input is [1,2,3,4,5]");

(function (arr) {
  let res = arr.reduce((prevValue, curValue) => {
    return prevValue + curValue;
  });

  console.log(" Sum of array is : ", res);
})([1, 2, 3, 4, 5]);

//4. Return all the prime numbers in an array
// 1 is neither prime nor composite number.
console.log("\n4. Return all the prime numbers in an array");
console.log("Input is [2,4,5,7,9]");
(function (numArr) {
  numArr = numArr.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log("Prime numbers are : ", numArr);
})([2, 4, 5, 7, 9]);

//5. Return all the palindromes in an array

console.log("\n5. Return all the palindromes in an array");
console.log("Input is  ['carecar', 1344, 12321, 'did', 'cannot']");

(function (arr) {
  let res = arr.filter((item) => {
    let temp = String(item);
    let len = temp.length;
    for (i = 0; i <= len; i++) {
      if (temp[i] !== temp[len - 1 - i]) return false;
    } // end of for condition
    return true;
  });
  console.log("palindromes in an array are - ", res);
})(["carecar", "AAAA", 12321, "did", "cannot"]);

//Return median of two sorted arrays of the same size

console.log("\n6. Return median of two sorted arrays of the same size");
console.log("Input is \n  arr1 = [1,2,3,4]; \n  arr2 = [5,6,7,8]");

(function (ar1, ar2) {
  let n = ar1.length; // we can take length of any array as length is same
  var i = 0; /* Current index of  array ar1[] */
  var j = 0; /* Current index of  array ar2[] */
  var count;
  var m1 = -1,
    m2 = -1; // initial values

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
  console.log("Median of equal sized sorted array is ", (m1 + m2) / 2);
})([1, 2, 3, 4], [5, 6, 7, 8]);

// 7. Remove duplicates from an array
console.log("\n7. Remove duplicates from an array Using IIFE");
console.log("Input is [1,2,3,5,2,3,6,8,9,5]");

(function (arr) {
  let res = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item));
  console.log("Non Duplicate items in array are - ", res);
})([1, 2, 3, 5, 2, 3, 6, 8, 9, 5]);

//8. Rotate an array by k times using IIFE
console.log("\n8. Rotate an array by k times using IIFE");
console.log("Input is [1,2,3,4,5,6]");
(function rotateByIFEE(arr, k) {
  let length = arr.length;
  let temp;
  for (let i = 0; i < k; i++) {
    temp = arr[0];
    for (let j = 0; j < length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[length - 1] = temp;
  } // outer for loop

  /* for rotating to right
        for(let i = 0; i < k; i++){
        temp = arr[length - 1];
        for(let j = length - 1; j >= 0; j--){
        arr[j] = arr[j - 1]
        }
        arr[0] = temp  ;
    }
    */
  console.log("After rotating array output is", arr);
})([1, 2, 3, 4, 5, 6], 2);
