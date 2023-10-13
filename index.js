// Prime number.......

const num = 24;

function isPrime(num) {
  if (num == 1) return "1 is not a prime not a component";

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(num)); // false
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
// console.log(fibonacci(1));
// console.log(fibonacci(0));

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

function areAnagram(str1 = '',str2 = ''){
  if(str1.length < 1 && str2.length < 1) return false;
if(str1.length !== str2.length) return false;


  const store = {};

  for(let i = 0; i<str1.length;i++){
    store[str1[i]] =  (store[str1[i]] || 0 ) +1 ;
    
  };


  for(let i = 0; i<str2.length;i++){
    if(!store[str2[i]]){
      return false;
    }
    store[str2[i]]--
  }
 return true;
};
//console.log(areAnagram('moonn','mnoon'));



// 15. **Maximum Subarray Sum**
// //////    - Example: Find the maximum subarray sum in [-2, 1, -3, 4, -1, 2, 1, -5, 4].
// //////    - Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// //////    - Output: 6

// 16. **Trapping Rainwater**
// //////    - Example: Compute the amount of trapped rainwater in [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].
// //////    - Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// //////    - Output: 6

// 17. **Spiral Order Matrix**
// //////    - Example: Traverse the 3x3 matrix in spiral order.
// //////    - Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// //////    - Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// 18. **Valid Sudoku**
// //////    - Example: Check if a Sudoku board is valid.
// //////    - Input:
// //////      ```
// //////      [
// //////        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
// //////        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
// //////        [".", "9", "8", ".", ".", ".", ".", "6", "."],
// //////        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
// //////        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
// //////        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// //////        [".", "6", ".", ".", ".", ".", "2", "8", "."],
// //////        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
// //////        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// //////      ]
// //////      ```
// //////    - Output: True

// 9. **Subarray with Given Sum**
// //////   - Example: Find a subarray with sum 10 in [1, 4, 20, 3, 10, 5].
// //////   - Input: [1, 4, 20, 3, 10, 5], 10
// //////   - Output: [20, 3, 10]
