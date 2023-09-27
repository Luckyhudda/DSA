const nimo = ["nimo"];
const everyOne = [
  "lucky",
  "name",
  "final",
  "raja",
  "rani",
  "saroj",
  "palvi",
  "nani",
  "karan",
  "nimo",
];

const large = new Array(1000).fill("raj");
large.push('nimo')

function findNimo(arr) {
  let timeOne = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nimo") {
      console.log("found nimo at:", i);
      break;
    }
  }
  let timeTwo = performance.now();
  console.log(timeTwo - timeOne, "taken by function");
}
findNimo(large); //big O(n) ----> Linear Time


function compressItem (arr) {
    return arr.forEach(item => item);
   // return result;
}
console.log(compressItem(everyOne));
