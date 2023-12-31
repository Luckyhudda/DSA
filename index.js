"use strict";
// Prime number.......

function isPrime(num) {
  if (num == 1) return "1 is not a prime not a component";

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(5)); // true
// console.log(isPrime(1)); // false

function fibonacci(num) {
  let arr = [];

  if (num == 0) {
    return [];
  } else if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  } else {
    arr = [0, 1];
    for (let i = 2; i < num; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr;
}

// console.log(fibonacci(7));

function factorial(num) {
  sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(1));

function powTow(num, pw) {
  if (pw == 0) return 1;
  if (pw == 1) return num;
  let result = 1;
  for (let i = 1; i <= pw; i++) {
    result *= num;
  }
  return result;
}

// console.log(powTow(2,2));
// console.log(powTow(2,4));
// console.log(powTow(2,1));

function powThree(num, pw) {
  if (pw == 0) return 1;
  if (pw == 1) return num;
  let result = 1;
  for (let i = 0; i < pw; i++) {
    result *= num;
  }
  return result;
}

// console.log(powThree(3,3));
// console.log(powThree(3,1));
// console.log(powThree(3,2));
// console.log(powThree(3,0));

function factorialRec(num) {
  if (num < 1) return 1;
  return num * factorialRec(num - 1);
}
// console.log(factorial(4));       // 23
// console.log(factorial(5));      // 120
// console.log(factorial(1));     // 1

function fiboRecursive(num) {
  if (num == 1) {
    return 1;
  } else if (num == 0) {
    return 0;
  }
  return fiboRecursive(num - 1) + fiboRecursive(num - 2);
}

// console.log(fiboRecursive(25))
// console.log(fiboRecursive(3))
// console.log(fiboRecursive(7))

function powRec(num, power) {
  if (power == 0) {
    return 1;
  }
  if (power == 1) {
    return num;
  }
  return num * powRec(num, power - 1);
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 0));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));

function binarySearchRecursive(arr, target) {
  return searchFun(arr, target, 0, arr.length - 1);
}

function searchFun(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return searchFun(arr, target, mid + 1, end);
  } else if (arr[mid] > target) {
    return searchFun(arr, target, start, mid - 1);
  }
}

// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 4));
// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 0));
// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 1));

/*

 ::::::::::::::::::::=>>>>>>>>>>> SORTING ALGORITHUM


*/

function bubbleSort(arr) {
  let n = arr.length;
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    n--;
  } while (swapped);

  return arr;
}

////////////// BIG O(N^2)
// console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
// console.log(bubbleSort([99, 77, 33, 66, 55, 88, 0, 11]));
// console.log(bubbleSort([-1, 2, 4, 7, 34, -5, 66]));

function insertionSort(arr) {
  let n = arr.length;

  // we start from 1 Bcoz we thought first arr[0] is already sorted...
  for (let i = 1; i < n; i++) {
    let element = arr[i]; // current element ------------> arr[1]
    let j = i - 1; // Bcoz we wanna compaire current element with sorted element everytime.... first time arr[0]

    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = element;
  }

  return arr;
}

////////////////BIG O(N^2)
// console.log(insertionSort([6, 5, 4, 3, 2, 1]));
// console.log(insertionSort([99, 77, 33, 66, 55, 88, 0, 11]));

function quickSort(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort([55,44,88,33,0,-11]));
// console.log(quickSort([4,8,5,2,1,3,9,6,7]));

// Question : arr1 [ 'x', "a", "s", "z"] && arr2 = ["f", "g", "j"] if an element are same in both array then return true else return false....

function isTrue(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        console.log(arr1[i], arr2[j]);
        return true;
      }
    }
  }
  return false;
} // BIG O(N^2) ==> BIG O(a*b)
// console.log(isTrue(["x", "a", "s", "z"], ["f", "g", "j",'a']));
// console.log(isTrue(["x", "a", "s", "z"], ["f", "g", "xx"]));

// Optimize solution...

function compairItem(arr1, arr2) {
  // arr1 ====> obj
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      const item = arr1[i];
      obj[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//  // BIG O(a+b)
// console.log(compairItem(["x", "a", "s", "z"], ["f", "g", "j", "a"]));
// console.log(compairItem(["x", "a", "s", "z"], ["f", "g", "xx"]));

function reverseStr(str) {
  // let arr = str.split('');
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}
//  // BIG O(n)
// console.log(reverseStr('hello man'));

function margeTwoArray(arr1, arr2) {
  const margedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      margedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      margedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return margedArray;
}
// console.log(margeTwoArray([1, 2, 4, 5], [2, 3, 6, 8]));

function recurringItem(item) {
  let hashTable = {};
  for (let i = 0; i < item.length; i++) {
    if (!hashTable[item[i]]) {
      key = item[i];
      hashTable[key] = true;
    } else {
      return item[i];
    }
  }

  return undefined;
}

//// BIG 0(n)
// console.log(recurringItem([1, 2, 2, 4, 5, 6, 7, 9]));

//// 8. **Find the Majority Element**
////  - Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]---------------->> Output: 4

function majorityElement(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
    console.log(obj);

    if (obj[arr[i]] > arr.length / 2) {
      return arr[i];
    }
  }
  return -1;
}
//////BIG O(n)
// console.log(majorityElement([3, 4, 2, 4, 4, 2, 4, 4]));

// SELECTION SORT ALGO FOR SORTING.........

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
//console.log(selectionSort([1, 2, 3, 4, 5, 8, 9, 6]));

// 3. **Array Rotation**
// //////   - Example: Rotate the array [1, 2, 3, 4, 5] by 2 steps to the right.
// //////   - Input: [1, 2, 3, 4, 5], 2
// //////   - Output: [4, 5, 1, 2, 3]

//////// Rotate an Array to the Right (Clockwise):
function rotateArrayClockWise(arr, k) {
  const result = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    result[newIndex] = arr[i];
  }

  return result;
}

// console.log(rotateArrayClockWise([1, 2, 3, 4, 5], 2));

///////////////// Rotate an Array to the Left (Counterclockwise)
function rotateArrayAntiClockWise(arr, k) {
  const result = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    const newIndex = (i - k + n) % n;
    result[newIndex] = arr[i];
  }

  return result;
}

//console.log(rotateArrayAntiClockWise([1, 2, 3, 4, 5], 2));

// 5. **Find Missing Number**
// //////   - Example: Find the missing number in [0, 1, 3].
// //////   - Input: [0, 1, 3]
////////    - Output: 2

function missingNum(arr) {
  const n = arr.length;
  let expextedSum = (n * (n + 1)) / 2;

  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
  }

  return expextedSum - currentSum;
}
//console.log(missingNum([0,1,3,4,5]));

// 12. **Remove Duplicates from Sorted Array**
// //////    - Example: Remove duplicates in [1, 1, 2, 3, 3, 3, 4].
// //////    - Input: [1, 1, 2, 3, 3, 3, 4]
// //////    - Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  const obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
////# BIG O(n)
// console.log(removeDuplicates([1, 1, 2, 3, 3, 3, 4]));

// 13. **Product of Array Except Self**
// //////    - Example: Compute the product of [1, 2, 3, 4].
////////     - Input: [1, 2, 3, 4]
////////     - Output: [24, 12, 8, 6];

function productOfArrayExceptSelf(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      product *= arr[j];
    }
    result.push(product / arr[i]);
  }
  return result;
}
//console.log(productOfArrayExceptSelf([1,2,3,4]));

//////////////// DYNAMIC PROGRAMMING...........

function memoizedFun(n) {
  const cache = {};
  if (n in cache) {
    return n + 90;
  } else {
    console.log("Long Time");
    cache[n] = n + 90;
    return cache[n];
  }
}

// console.log(memoizedFun(5));
// console.log(memoizedFun(5));

////////////// MAMOIZED FUNCTION USING CLOSER....

function momoCloser(n) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return n + 90;
    } else {
      console.log("long time");
      cache[n] = n + 90;
      return cache[n];
    }
  };
}

const memoFn = momoCloser();

// console.log(memoFn(5));
// console.log(memoFn(5));

//// #### SOLVE FIBONACCHI DYNAMICALLY.....

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();

// console.log(fasterFib(25));

///////// FIBONACCHI ARRAY......

function fiboArray(n) {
  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }
  return fibArray;
}

// console.log(fiboArray(7));

// 6. **Find Intersection of Two Arrays**
// //////   - Example: Find the intersection of [1, 2, 2, 1] and [2, 2].
////////    - Input: [1, 2, 2, 1], [2, 2]
////////    - Output: [2]

function intersectionSolution(arr1, arr2) {
  let answare = [];
  let hashing = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!hashing[arr1[i]]) {
      hashing[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (hashing[arr2[j]]) {
      answare.push(arr2[j]);
      delete hashing[arr2[j]];
    }
  }

  return answare;
}
// console.log(intersectionSolution([1, 2, 2, 1], [2, 2]));
// console.log(intersectionSolution([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// 10. **Move Zeroes**
////////     - Example: Move zeroes to the end in [0, 1, 0, 3, 12].
////////     - Input: [0, 1, 0, 3, 12]
////////     - Output: [1, 3, 12, 0, 0]

function movesZeros(arr) {
  let answare = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      answare.push(arr[i]);
    } else {
      count++;
    }
  }

  for (let j = 0; j < count; j++) {
    answare.push(0);
  }

  return answare;
}
// console.log(movesZeros([0, 1, 0, 3, 12]));

function movesZerosSwaping(arr) {
  let zeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[zeroIndex]] = [arr[zeroIndex], arr[i]];
      zeroIndex++;
    }
  }
  return arr;
}

// console.log(movesZerosSwaping([1,0,3,0,12]));

// 11. **Kth Largest Element**
// //////    - Example: Find the 3rd largest element in [3, 2, 1, 5, 6, 4].
// //////    - Input: [3, 2, 1, 5, 6, 4], 3
// //////    - Output: 4

function sortFun(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...sortFun(left), pivot, ...sortFun(right)];
}

function KthLasgest(array, position) {
  let sortedArray = sortFun(array);
  return sortedArray[sortedArray.length - position];
}
// console.log(KthLasgest([3, 2, 1, 5, 6, 4], 3));

// 14. **Find Peak Element**
// //////    - Example: Find a peak element in [1, 2, 3, 1].
////////     - Input: [1, 2, 3, 1]
// //////    - Output: 3 (or any peak)

function findPeak(arr) {
  let peakElement = 0;

  if (arr.length < 1) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[peakElement]) {
      peakElement = arr[i];
    }
  }

  return peakElement;
}
// console.log(findPeak([1,2,3,15]));
//////////////////////////////////////////////// ANOTHER WAY TO SOLVE THIS IS BINARY SEARCH ITS GIVE ====> BIG 0(n)

// // # Count Vowels and Consonants:  Question: Write a program to count the number of vowels and consonants in a given string.

function countLetters(input) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowel = 0;
  let consonant = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") continue;
    if (vowels.includes(input[i])) {
      vowel++;
    } else {
      consonant++;
    }
  }

  return `vowel:${vowel} & consonant: ${consonant}`;
}
//console.log(countLetters("Hello World")); //Vowels: 3     //Consonants: 7

function countLetters2(input) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowel = 0;
  let consonant = 0;

  let obj = {};

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") continue;
    else {
      obj[input[i]] = true;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") continue;
    if (obj[input[i]] == vowels.includes(input[i])) {
      vowel++;
    } else {
      consonant++;
    }
  }

  return `vowel:${vowel} & consonant: ${consonant}`;
}
//console.log(countLetters2("Hello World")); //Vowels: 3     //Consonants: 7

////## Check if Two Strings are Anagrams:  Question: Write a program to check if two strings are anagrams of each other.

/////////////Input: "listen", "silent"   Output: True

function areAnagram(str1 = "", str2 = "") {
  if (str1.length < 1 && str2.length < 1) return false;
  if (str1.length !== str2.length) return false;

  const store = {};

  for (let i = 0; i < str1.length; i++) {
    store[str1[i]] = (store[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!store[str2[i]]) {
      return false;
    }
    store[str2[i]]--;
  }
  return true;
}
//console.log(areAnagram('moonn','mnoon'));

// // // //  06   Write a function to check if a given string is a palindrome............

// // // // palindrome ?  =>  str === reverse(str)

function revstr(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  if (str.toLowerCase() == reverse.toLocaleLowerCase()) return true;
  return false;
}
// console.log(revstr("madam")); // true
// console.log(revstr("lucky")); // false
// console.log(revstr("Saroras")); // true

// // // // 09   Write a function to find the sum of an array of numbers............

function sumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
// console.log(sumOfArr([1,2,3,4,5,6,7,9,0]));

// // // // 12  Write a function to convert a string to camel case....................

function toCamelCase(str) {
  let arr = str.split(" ");

  let answare = "";

  for (let i = 0; i < arr.length; i++) {
    answare = answare + (arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return answare;
}
//console.log(toCamelCase("string to camel case"));

// // // // 15  Write a function to remove all spaces from a string................
// let reStr = '     file ';

function removeSpace(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}
// console.log(removeSpace('     file '));

// // // // 16   Write a function to capitalise the first letter of each word in a string..........

function capitaliseLetter(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}
// console.log(capitaliseLetter('my name is lucky hudda'));

// // // // 18  Write a function to shuffle an array.....// change the order of array elements...

function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomEle = Math.floor(Math.random(i * 1) + 1);
    [arr[i], arr[randomEle]] = [arr[randomEle], arr[i]];
  }

  return arr;
}
//console.log(shuffleArray([1,2,3,4,5,6]));

// // // // 19  Write a function to flatten an array of nested arrays.
function flattenArr(arr) {
  let answare = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      answare = answare.concat(flattenArr(arr[i]));
    } else {
      answare.push(arr[i]);
    }
  }
  return answare;
}
// console.log(flattenArr([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));

// // // // 25  Write a function to find the union of two arrays...

function findUnion(arr1, arr2) {
  const unionArr = [];
  const selectior = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!selectior[arr1[i]]) {
      selectior[arr1[i]] = true;
      unionArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!selectior[arr2[i]]) {
      unionArr.push(arr2[i]);
    }
  }
  return unionArr;
}
// console.log(findUnion([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], [2, 4, 6, 7, 9, 0, 11]));

// // // // 26  Write a function to find the difference of two arrays...

function findDifference(arr1, arr2) {
  const tracker = {};
  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    tracker[arr2[i]] = true;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!tracker[arr1[i]]) {
      result.push(arr1[i]);
    }
  }
  return result;
}
// console.log(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], [2, 4, 6, 7, 9, 0, 11]))

// // // // 27  Write a function to sort an array in ascending order.

function ascendingOrder(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...ascendingOrder(left), pivot, ...ascendingOrder(right)];
}
//console.log(ascendingOrder([1, 3, 2, 4, 6, 5, 8, 0, 9, 7]));

// // // // // 28  Write a function to sort an array in descending order.
let arr28 = [1, 3, 2, 4, 6, 5, 8, 0, 9, 7];

function descendingOrder(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    }
    if (arr[i] > pivot) {
      left.push(arr[i]);
    }
  }

  return [...descendingOrder(left), pivot, ...descendingOrder(right)];
}
//console.log(descendingOrder([1, 3, 2, 4, 6, 5, 8, 0, 9, 7]));

// // // // 29  Write a function to filter out all even numbers from an array.
function findEven(arr) {
  let evenList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenList.push(arr[i]);
    }
  }
  return evenList;
}
//console.log(findEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16]));

// // // // 30 Write a function to filter out all odd numbers from an array.
function findOdd(arr) {
  let oddList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddList.push(arr[i]);
    }
  }
  return oddList;
}
//console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19]))

// // // 44  Write a function to find the maximum occurring character in a string.

function maxOccurring(str) {
  const charStore = {};
  let maxOccur = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      charStore[str[i]] = (charStore[str[i]] || 0) + 1;
    }
  }

  for (let n in charStore) {
    if (charStore[n] > maxOccur) {
      maxOccur = charStore[n];
    }
  }
  return maxOccur;
}
// console.log(maxOccurring('hello world'));

// // // 43  Write a function to find the first non-repeating character in a string.

function nonRepeating(str) {
  const charStore = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      charStore[str[i]] = (charStore[str[i]] || 0) + 1;
    }
  }

  for (let n in charStore) {
    if (charStore[n] == 1) {
      return n;
    }
  }
  return null;
}
// console.log(nonRepeating('hello world')); // H
// console.log(nonRepeating('kaka'));   // Null

// // 06 Write a program to find the factorial of a given number using a for loop.

function factUsingForLoop(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}
// console.log(factUsingForLoop(5));

// // // //  07  Write a program to print the Fibonacci series up to a given number using a for loop.
// // Fibonacci series 0,1,1,2,3,5,8,13,21,34,55.....

function fibSeriesUsingForLoop(num) {
  let result = [0, 1];

  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}
// console.log(fibSeriesUsingForLoop(7));

// // // // Write a program to check if a given array is sorted in ascending order or not.
function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(isSortedAscending([1,2,3,14,5,6]));

// // // // Write a program to check if a given array is sorted in descending order or not.
function isSortedDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(isSortedDescending([6,5,4,3,2,1]));

// // // // Write a program to find the frequency of each element in an array.

function frequencyOfElement(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  return Object.entries(obj);
}
// console.log(
//   frequencyOfElement(["a", "b", "c", "f", "a", "f", "f", "f", "a",'c'])
// );

// // // // Write a program to split an array into two parts from a specific index.

function splitArray(arr, index) {
  if (arr.length < 2) return arr;

  const partOne = arr.slice(0, index);
  const partTwo = arr.slice(index);

  return { partOne, partTwo };
}
// console.log(splitArray([1,2,3,4,5,6,7,8,9],3));

// // // // Write a program to check if an object is empty.
function isEmptyObj(obj) {
  if (!Object.keys(obj).length) {
    return true;
  }
  return false;
}
// console.log(isEmptyObj({ name: "raj" }));
// console.log(isEmptyObj({}));

// // // // Write a program to count the number of properties in an object.
function countObjProperties(obj) {
  return Object.keys(obj).length;
}
// console.log(countObjProperties({'name':'Lucky','age':22}));

// // // // Write a program to create an object from two arrays.

function createObj(key, value) {
  const obj = {};
  for (let i = 0; i < value.length; i++) {
    if (i < value.length) {
      obj[key[i]] = value[i];
    } else {
      obj[key] = null;
    }
  }
  return obj;
}
// console.log(createObj(['name','age','email'],['lucky',22,'lucky@gmail.com']));

// // // 13 Write a #JavaScript program to remove a character at the specified position of a given string and return the new string.

const removeChr = function (str, position) {
  if (position > str.length || position < 0) return `Invalid position value`;

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (position !== i) {
      console.log(str[i]);
      newStr += str[i];
    }
  }

  return newStr;
};
// console.log(removeChr("lucky hudda", 2));

// // 14  Write a #JavaScript program to create a new string from a given string changing the position of the first and last characters. The string length must be greater than or equal to 2

function ReplaceChar(str) {
  if (str.length < 2) {
    return `Please provide a valid string with length greater than or equal to 2.`;
  } else {
    return str[str.length - 1] + str.slice(1, -1) + str[0];
  }
}
// console.log(ReplaceChar("Lucky"));



// get all duplicates from array...

function getDuplicates(arr){


  const tracker = {};
  const duplicate = [];

  for(let i =0; i<arr.length;i++){
    tracker[arr[i]] = (tracker[arr[i]] || 0) +1
  }

  for(let j = 0; j<arr.length;j++){
    if(tracker[arr[j]] >1){
      duplicate.push(arr[j])
    }
  }

  return duplicate

};
// console.log(getDuplicates([1,2,3,4,5,6,3,7,5,3]))

// // // 17 Write a #JavaScript program to create a new string from a given string taking the last 3 characters and adding at both the front and back. The string length must be 3 or more.

// let mainStr = 'lucky';

function bothSideResult(str){
    if(str.length < 3){
        return `Please provide a valid "String" with length of 3+`
    } else{
        let a = str[str.length -3] + str[str.length -2] + str[str.length -1]
        return a + str + a
    }
}
// console.log(bothSideResult(mainStr));

// // 18 Write a #JavaScript program to check if a string starts with 'Java' and false otherwise.

// let strJava = 'JavaScript is best programming language';
// let sWith = 'Java Script'
// let sWith2 = 'file'

// const startJs = function(str , match){
// if((str[0] === 'j' || str[0] === 'J') &&  (str[1] === 'a' || str[1] === 'A') && (str[2] === 'v' || str[2] === 'V') && (str[3] === 'a' || str[3] === 'A')){
//     return true;
// } else{
//     return false
// }
// }
// console.log(startJs(strJava))
// console.log(startJs(sWith2))

// // // => when we use both arguments & in-Build method
// // const startJs1 = function(str , match){
// //     return str.startsWith(match)
// //     }
// //     console.log(startJs1(strJava, sWith))
// //     console.log(startJs1(strJava, sWith2))

// // // 19 Write a #JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them is in the said range.

// let valueONe = 93;
// let valueTwo = 5;

// function rightRange(num1, num2){
//     if((num1 > 50 && num1 < 99) || (num2 > 50 && num2 < 99)){
//         return true
//     } else{
//          return false;
//     }
// }
// console.log(rightRange(valueONe, valueTwo));

// // // 20 Write a #JavaScript program to check if a string "Script" presents at the 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// // 21 Write a #JavaScript program to find the largest of three given integers.

// let oneInt = 134;
// let secInt = 44;
// let thInt = 233;

// const largInt = function(one, two, three){
//   return   one > two ? ( one > three ? one : three) : (two > three ? two : three);
// }
// console.log(largInt(oneInt, secInt, thInt))
// console.log(largInt(111,231,31))
// console.log(largInt(11,-321,1331))

// // 22 Write a #JavaScript program to find a value that is nearest to 100 from two different given integer values.

// let value1 = 44;
// let value2 = 45;

// const nearestValue = function(v1, v2){
//     let finalone = 100 - v1;
//     let finalTwo = 100 - v2;
//     if(finalone >= 0 && finalTwo >= 0){
//         if(finalone > finalTwo){
//             return `Nearest value is ${v2}`
//         }
//         return `Nearest value is ${v1}`
//     }
//     return  `Please provide value < 100`
// }
// console.log(nearestValue(value1, value2));
// console.log(nearestValue(88, 155));

// // 24 Write a #JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// let numOne = 44;
// let numTwo = 55;

// const largeInRange = function(num1, num2){
//     if((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)){
//         return num1 > num2 ? `larger number ${num1}` : `larger number ${num2}`
//     }
//     return `Please provide value in range of 40-60`
// }
// console.log(largeInRange(numOne, numTwo))
// console.log(largeInRange(55, 33))

// // // 25 Write a #JavaScript program to check a given string containing 2 to 4 numbers of a specified character.

// // // 26 Write a #JavaScript program to check if the last digit of the three given positive integers is the same.

// // 27 Write a #JavaScript program to create a new string with the first 3 characters in the lower case from a given string. If the string length is less than 3 convert all the characters in the upper case.

// let newStr = 'Luvey';

// const convertStr = function(str){
// if(str.length >= 3){
//     // return str.slice(0,3).toLowerCase()
//     return str[0] + str[1] + str[2];

// }
//  return str.toUpperCase();
// }
// console.log(convertStr(newStr))

// // // 28 Write a #JavaScript program to check the total marks of a student in various examinations. The student will get an A+ grade if the total marks are in the range of 89..100 inclusive, if the examination is "Final-exam." the student will get an A+ grade where total marks must be greater than or equal to 90. Return true if the student gets an A+ grade or false otherwise.

// let studentResult = {
//     math: 56,
//     english: 99,
//     hindi: 67,
//     physics: 88,
//     computer: 99
// }

// function finalResult(marks){
//     final = (marks.math + marks.english + marks.hindi + marks.computer + marks.physics) *100 / 500;
//     if(final > 90){
//         return true;
//     } return false
// }
// console.log(finalResult(studentResult));

// // 29 Write a #JavaScript program to check two given non-negative integers, whether one of the numbers (not both) is a multiple of 7 or 11.

// let num1 = 77;
// let num2 = 23;

// const nonNegativeMultiple = function(num1, num2){
//     if(num1 > 0 && num2 > 0){
//         if(((num1 % 7 ===0) && (num1 % 11 ===0)) && ((num2 % 7 ===0) &&(num2 % 11 ===0))){
//                 return  false + ` => Both numbers are multiple of 7 or 11`;
//         }else if(((num1 % 7 ===0) && (num1 % 11 ===0)) || ((num2 % 7 ===0) &&(num2 % 11 ===0))){
//             return ((num1 % 7 ===0) && (num1 % 11 ===0)) ? ` multiple of 7 or 11 is :=> ${num1}  ` : ` multiple of 7 or 11 is :=> ${num2}  `;
//         }
//         return `Neither the ${num1} nor the ${num2} number is a multiple of 7 or 11`
//     }
//     return `Please provide +ve number`
// }
// console.log(nonNegativeMultiple(num1, num2)) // only one(not both)
// console.log(nonNegativeMultiple(231,77)) // both of them
// console.log(nonNegativeMultiple(-31,77)) // -ve value
// console.log(nonNegativeMultiple(31,27)) // non of them

// // 30 Write a #JavaScript program to check two given integer values and return true if one of the numbers is 15 or if their sum or difference is 15.
// const returnTrueValue = function(x,y){
//     if((x ===50 || y === 15) || (x  + y == 15) || (x - y ===15) || (y - x ===15)){
//        return true
//     }
//     return false
//    }
//    console.log(returnTrueValue(21,15));  // one  value of them...
//    console.log(returnTrueValue(16,1));   // difference of them
//    console.log(returnTrueValue(14,1));  // sum of them....
//    console.log(returnTrueValue(15,15));  // both value of them
//    console.log(returnTrueValue(43,55));  // !both value of them

// // 31 Write a #JavaScript program to check from three given integers whether a number is greater than or equal to 20 and less than one of the others.

// let givNum1 = 11;
// let givNum2 = 43;
// let givNum3 = 143;

// function checkingNum(num1, num2, num3){
//  let num = 20;

// }
// console.log(checkingNum(givNum1, givNum2, givNum3));

// // 32 Write a #JavaScript Program to Find the Square Root

// let sqNum = 25;

// const sqrtNum = function(num){
//  return Math.sqrt(num);
// }
// console.log(sqrtNum(sqNum));
// console.log(sqrtNum(23));
// console.log(sqrtNum(16));

// // 33 Write a #JavaScript Program to Calculate the Area of a Triangle

// let sideOne = 2;
// let sideTwo =3;
// let sideThree = 4;

// let s = (sideOne + sideTwo + sideThree) / 2

// const areaFormula = function(s1,s2,s3){
//     let s = (s1+ s2 + s3)/2
//     if(s1 + s2 > s3){
//         let result = Math.sqrt(s* (s-s1)*(s-s2)*(s-s3)).toFixed(1)
//         return Number(result);
//     }
//     return  `Invalid input make sure a + b > c`
// }
// console.log(areaFormula(sideOne, sideTwo, sideThree))
// console.log(areaFormula(3,4,5))

// // 34  Write a #JavaScript Program to Swap Two Variables.
// // swap ? => a -> b, b -> a

// let swapOne = 2;
// let swapTwo = 3;

// const swapNum = function(a, b){
//   let temp = a;
//   a = b;
//   b = temp;
//   return {a,b}
// }
// console.log(swapNum(swapOne, swapTwo));
// console.log(swapNum(66, 55));

// // // 35 Write a #Javascript Program to Solve Quadratic Equation.
// // // 36 Write a #JavaScript Program to Convert Kilometers to Miles.
// // // 37 Write a #Javascript Program to Convert Celsius to Fahrenheit.

// // 38 Write a #Javascript Program to Generate a Random Number.
// console.log(Math.floor(Math.random() * 75 )+1)

// // 39 Write a #Javascript Program to Check if a number is Positive, Negative, or Zero.

// let givNun = 23;

// const givNumProperty = function(num){
//     if(num === 0){
//         return `it is Zero`
//     } else if(num > 0){
//         return `${num} is a Positive number`

//     } else{
//         return `${num} is a Negative number`
//     }
// }
// console.log(givNumProperty(givNun)); //positive
// console.log(givNumProperty(0));  // Zero
// console.log(givNumProperty(-7)); // Negative

// // // 42 Write a #JavaScript Program to Check Prime Number.

// // // 43 Write a #JavaScript Program to Print All Prime Numbers in an Interval.
// // // 44 Write a #JavaScript Program to Find the Factorial of a Number.
// function findFactorial(num){
//     if(num == 0 || num ==1){
//         return 1;
//     }
//     return num *  findFactorial(num-1)

// }
// console.log(findFactorial(5));
// // 45 Write a #JavaScript Program to Display the Multiplication Table

// let tableNum = 3;

//  const MultiplicationTab = function(num){
//      console.log(`--- Multiplication Table of ${num} ---`)   //  // remove Comment for result
//   for (let i = 1; i <=10; i++) {
//      console.table(i*num)
//     }
// }
// MultiplicationTab(tableNum);
// MultiplicationTab(111);

// // // 46 Write a #JavaScript Program to Print the Fibonacci Sequence.

// // // 49 Write a #JavaScript Program to Make a Simple Calculator.

// function simpleCalc(num1, op, num2){
//     if(op === "+"){
//         return num1 + num2
//     } if(op === "*"){
//         return num1 * num2
//     } if(op === "/"){
//         return num1 / num2
//     } if(op === "-"){
//         return num1 - num2
//     }
// }
// console.log(simpleCalc(2,"*",6))

// // // 51 Write a #JavaS,cript Program to Check if the Numbers Have the Same Last Digit
// // // 52 Write a #JavaScript Program to Find HCF or GCD.
// // // 53 Write a #JavaScript Program to Find LCM.
// // // 54 Write a #JavaScript Program to Find the Factors of a Number.
// // // 55 Write a #JavaScript Program to Find Sum of Natural Numbers Using Recursion.
// // // 56 Write a #JavaScript Program to Guess a Random Number.
// // // 57 Write a #JavaScript Program to Shuffle Deck of Cards.
// // // 58 Write a #JavaScript Program to Display Fibonacci Sequence Using Recursion.
// // // 59 Write a #JavaScript Program to Display Fibonacci Sequence Using Recursion.
// // // 60 Write a #JavaScript Program to Convert Decimal to Binary.
// // // 61 Write a #JavaScript Program to Find ASCII Value of Character.
// // // 62 Write a #JavaScript Program to Check Whether a String is a Palindrome or Not.
// // // 63 Write a #JavaScript Program to Sort Words in Alphabetical Order.
// // // 64 Write a #JavaScript Program to Replace Characters of a String.
// // // 65 Write a #JavaScript Program to Reverse a String.
// // // 66 Write a #JavaScript Program to Create Objects in Different Ways.
// // // 67 Write a #JavaScript Program to Check the Number of Occurrences of a Character in the String.
// // // 68 Write a #JavaScript Program to Convert the First Letter of a String into UpperCase.
// // // 69 Write a #JavaScript Program to Count the Number of Vowels in a String.
// // // 70  Write a #JavaScript Program to Count the Number of Vowels in a String.
// // // 71 Write a #JavaScript Program to Check Whether a String Starts and Ends With Certain Characters.
// // // 72 Write a #JavaScript Program to Check if a Key Exists in an Object.
// // // 73 Write a #JavaScript Program to Loop Through an Object.
// // // 74 Write a #JavaScript Program to Count the Number of Keys/Properties in an Object.
// // // 75 Write a #JavaScript Program to Check if a String Starts With Another String.
// // // 76 Write a #JavaScript Program to Display Date and Time.
// // // 77 Write a #JavaScript Program to Check Leap Year.
// // // 78 Write a #Javascript Program to Display Current Date.
// // // 79 Write a #JavaScript Program to Compare The Value of Two Dates.
// // // 80 Write a #JavaScript Program to Create Countdown Timer.
// // // 81 Write a #JavaScript Program to Remove Specific Item From an Array.
// // // 82 Write a #JavaScript Program to Check if An Array Contains a Specified Value.
// // // 83 Write a #JavaScript Program to Insert Item in an Array.
// // // 84 Write a #JavaScript Program to Append an Object to An Array.
// // // 85 Write a #JavaScript Program to Check if An Object is An Array.
// // // 86 Write a #JavaScript Program to Empty an Array.
// // // 87 Write a #JavaScript Program to Add Element to Start of an Array.
// // // 88 Write a #JavaScript Program to Remove Duplicates From Array.
// // // 88  Write a #JavaScript Program to Merge Two Arrays and Remove Duplicate Items.
// // // 89 Write a #JavaScript Program to Sort Array of Objects by Property Values
// // // 90 Write a #JavaScript Program to Create Two Dimensional Array.
// // // 91 Write a #JavaScript Program to Extract Given Property Values from Objects as Array.
// // // 92 Write a #JavaScript Program to Compare Elements of Two Arrays.
// // // 93 Write a #JavaScript Program to Get Random Item From an Array.
// // // 94 Write a #JavaScript Program To Perform Intersection Between Two Arrays.
// // // 95 Write a #JavaScript Program to Split Array into Smaller Chunks.
// // // 96 Write a #JavaScript Program to Include a JS file in Another JS file.
// // // 97 Write a #JavaScript Program to Get File Extension.
// // // 98 Write a #JavaScript Program To Check If A Variable Is undefined or null.
// // // 99 Write a #JavaScript Program to Set a Default Parameter Value For a Function.
// // // 100 Write a #JavaScript Program to Illustrate Different Set Operations.
// // // 101 Write a #Javascript Program to Generate a Random Number Between Two Numbers.
// // // 102 Write a #JavaScript Program To Get The Current URL
// // // 103 Write a #JavaScript Program to Validate An Email Address.
// // // 104 Write a #JavaScript Program to Check If a Variable is of Function Type.
// // // 105 Write a #JavaScript Program to Pass Parameter to a setTimeout() Function.
// // // 106 Write a #JavaScript Program to Generate a Range of Numbers and Characters.
// // // 107 Write a #JavaScript Program to Perform Function Overloading.
// // // 108  Write a #JavaScript Program to Check if a Number is a Float or Integer.
// // // 109 : Write a #JavaScript Program to Pass a Function as Parameter.
// // // 110 : Write a #JavaScript Program to Get the Dimensions of an Image

// // //  112   Write a #JavaScript Program to find factorial recursevly
// // 5! => 5*4*3*2*1

// function factorial(num){
//     if(num == 1 ) {
//         return 1
//     }
//     return num * factorial(num -1)
// }
// console.log(factorial(5));

// // //  113   Write a #JavaScript Program to find  fibonacci series recursiuly

// function fibonacci(num){
//     if(num ===1){
//         return [0,1]
//     }
//     let result = fibonacci(num-1)
//    result.push(result[result.length-1] + result[result.length-2])
//    return result

// }
// console.log(fibonacci(7));
// .

// //  114  Find Index of targeted Element recursivly
// let array = [1,2,3,1,5,1,2]
//  let target = 1;
// // // Output 5

// function findIndexFromZero(arr,target,startIndex){
//         if(target === arr[startIndex]){
//             return startIndex
//         }
//        return findIndexFromZero(arr,target,startIndex-1)
// }

// function findIndex(arr, target){
//     return findIndexFromZero(arr, target, arr.length-1)
// }
// console.log(findIndex(array, target));

// //  115 plue  one at the end in array
// // Input [1,3,4]
// // Output [1,3,5]

// var plusOne = function(digits) {
//     if(digits[0] === 9){
//         digits.unshift(0)
//    }
//     if(digits[0] ===9){

//         if(digits[0] ===9){
//             digits = [1,0]
//         }
//         else digits[0] = digits[0] + 1
//    }
//     else{
//         digits[digits.length-1] += 1
//    for(let i = digits.length-1; i>=0;i--){
//        if(digits[i] >=10){
//            digits[i] = digits[i] % 10
//            digits[i-1] += Math.floor(digits[i]/10) + 1
//        }
//    }
//     }
//     if(digits[0] ===0){
//         digits.shift(0)
//     }
//    return digits
// };
// console.log(plusOne([1,2,7]));
// console.log(plusOne([9,9,8]));

// // 116  Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// //An integer m is a divisor of n if there exists an integer k such that n = k * m.

// let n = 12;

// var isThree = function (n) {
//    let count = 0;
//    for(let i = 1;i<=n ;i++){
//       if(n % i ==0){
//          count++

//       }
//    }
//    if(count == 3){
//       return true;
//    }
//    return false;
// };
// console.log(isThree(n));

// // 117 Find Greatest Common Divisor of Array

// let nums = [2, 5, 6, 9, 10];

// var findGCD = function (nums) {
//    let min = Math.min(...nums);
//    let max = Math.max(...nums);
//    for(let i = max; i>=1;i--){
//       if((min % i != 0) || (max % i != 0)){
//          continue;
//       }
//        return i;
//    }

// };
// console.log(findGCD(nums));
// // 15. **Maximum Subarray Sum**
// // //////    - Example: Find the maximum subarray sum in [-2, 1, -3, 4, -1, 2, 1, -5, 4].
// // //////    - Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// // //////    - Output: 6

// // 16. **Trapping Rainwater**
// // //////    - Example: Compute the amount of trapped rainwater in [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].
// // //////    - Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// // //////    - Output: 6

// // 17. **Spiral Order Matrix**
// // //////    - Example: Traverse the 3x3 matrix in spiral order.
// // //////    - Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// // //////    - Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// // 18. **Valid Sudoku**
// // //////    - Example: Check if a Sudoku board is valid.
// // //////    - Input:
// // //////      ```
// // //////      [
// // //////        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
// // //////        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
// // //////        [".", "9", "8", ".", ".", ".", ".", "6", "."],
// // //////        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
// // //////        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
// // //////        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// // //////        [".", "6", ".", ".", ".", ".", "2", "8", "."],
// // //////        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
// // //////        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// // //////      ]
// // //////      ```
// // //////    - Output: True

// // 9. **Subarray with Given Sum**
// // //////   - Example: Find a subarray with sum 10 in [1, 4, 20, 3, 10, 5].
// // //////   - Input: [1, 4, 20, 3, 10, 5], 10
// // //////   - Output: [20, 3, 10]

// // // // 22  Write a function to find the maximum sum of two numbers in an array.
// function MaxSum(arr) {
// let  MaxSumNum = 0;
//
//     return MaxSumNum;
// }
// console.log(MaxSum([1, 2, 3, 5, 6, 4, 8, 9, 55, 7, 15]))

// // // // 23  Write a function to find the second maximum sum of two numbers in an array.
// let arr23 = [1, 22, 13, 41, 55, 26, 7, 8, 9];
// function secondMaxSum() {
//     arr23.sort((a, b) => a - b);
//     return arr23[arr23.length - 2] + arr23[arr23.length - 3];
// }
// console.log(secondMaxSum())
// // // 39  Write a function to convert a number to Roman numerals.
// // // 40  Write a function to convert a Roman numeral to a number.
// // // 41  Write a function to generate all possible permutations of a given string.
// // // 42  Write a function to generate all possible combinations of a given string.

// // 47  Write a function to find the length of the longest consecutive sequence in an array of numbers.
// // 48  Write a function to find the length of the longest increasing subarray in an array of numbers.
// // 49  Write a function to find the length of the longest decreasing subarray in an array of numbers.

// //  10  Write a program to find the sum of digits of a given number using a while loop.

// // //  16  Write a program to print a pattern of stars using a nested for loop.

// function startPattern(numOfStart){
//   let pattern = '';
// for (let i = 1; i <= numOfStart; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
//   return pattern;
// }
// console.log(startPattern(5));

// // // // Write a program to find the maximum sum subarray in an array.
// // // // Write a program to find the sum of two matrices.
// // // // Write a program to multiply two matrices.
// // // // Write a program to find the subarray with the largest sum in an array.
// // // // Write a program to find the subarray with the smallest sum in an array.

// // // 111  Write a #JavaScript Program to Remove All Whitespaces From a Text
// // // // Here are some common promises-related problem-solving questions in JavaScript:
// // // // 01  Write a program to create a promise that resolves after a given amount of time.
// // // // 02  Write a program to chain promises.
// // // // 03  Write a program to handle errors in a promise chain.
// // // // 04  Write a program to use Promise.all to execute multiple promises concurrently.
// // // // 05  Write a program to use Promise.race to execute multiple promises concurrently and return the result of the first one that resolves.
// // // // 06  Write a program to use async/await to handle promises in a synchronous-looking way.
// // // // 07  Write a program to use Promise.resolve and Promise.reject to create resolved and rejected promises, respectively.
// // // // 08  Write a program to use the finally method to execute code after a promise resolves or rejects.
// // // // 09  Write a program to use Promise.any to execute multiple promises concurrently and return the result of the first one that resolves, ignoring any rejections.
// // // // 10  Write a program to use Promise.allSettled to execute multiple promises concurrently and return an array of their results, whether they resolved or rejected.

// //Q. WAP to calculate the HCF of any two numbers

// // 03 Write a #JavaScript program to find which 1st January is a Sunday between 2014 and 2050.
// // 04 Write a #JavaScript program to calculate the number of days left until next Christmas.
// // 05 Write a #JavaScript program to convert temperatures to and from Celsius and Fahrenheit.

// // 07 Write a #JavaScript program to check if the last digit of the three given positive integers is the same.
