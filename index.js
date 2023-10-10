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

// console.log(fiboRecursive(5))
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







