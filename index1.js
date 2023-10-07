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




function fibonacci(num){
    let arr = []

    if(num == 0) {
        return [];
    } 
    else if(num ==1){
        return [0]
    }else if(num ==2) {
        return [0,1]
    }else {
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



function factorial(num){
    sum = 1;
    for (let i = 1; i<=num;i++){
        sum*= i;
    }
    return sum;
}

// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(1));


function powTow(num, pw){
    if(pw == 0) return 1;
    if(pw == 1) return num;
    let result = 1;
    for(let i = 1; i<=pw;i++){
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

console.log(powThree(3,3));
console.log(powThree(3,1));
console.log(powThree(3,2));
console.log(powThree(3,0));