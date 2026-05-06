
// let input = "Ali Ahmed Hassan Raza Khan";


// let arr = input.split(" ");


// let result = arr.map(function(word) {
//     if (word.length > 7) {
//         return "Dr. " + word;
//     } else {
//         return "Prof " + word;
//     }
// });


// console.log("Original:", arr);
// console.log("Mapped:", result);



// let nameArray = ["redlight"];


// let mappedNames = nameArray.map(word => {
  
//     if (word.length < 7) {
//         return "Dr. " + word;
//     } else {
//         return "Prof. " + word;
//     }
// });

// console.log(mappedNames[0]);

// get largest Number
// let numbers = [];
// for (let i = 1; i <= 5; i++) {
//     let input = prompt("Enter number" +(i+1) + ":");
//     numbers.push(Number(input));
// }
// let largest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// document.getElementById("demo").innerHTML = largest



// get second largest Number
// let numbers = [];
// for (let i = 0; i <= 5; i++) {
//     let input = prompt("Enter number" +(i+1) + ":");
//     numbers.push(Number(input));
// }
// let largest = numbers[0];
// let secondLargest = numbers[1];
// if (secondLargest > largest) {
//     let temp = largest;
//     largest = secondLargest;
//     secondLargest = temp;
// }
// for (let i = 2; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;
//         largest = numbers[i];
//     } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//         secondLargest = numbers[i];
//     }
// }
// document.getElementById("demo").innerHTML = largest
// document.getElementById("demo").innerHTML = secondLargest




// const add = function(a, b) {
//   return a / b;
// };
// console.log(add(4,6))

// factorial function
// function factorial(n) {
//     if(n===0 || n===1) {
//         return 1;
//     }
//     {
//         return n * factorial(n-1)
//     }
// };
// console.log(factorial(5));

// function isEven(num) {
//     if (num % 2== 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }
// };

// console.log(isEven(4,5))

// let firstPrime = null;
// for (let i = 0; i < numbers.length; i++) {
//     let n = numbers[i];
//     let isPrime = true;
//     if (n <= 1) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j < n; j++) {
//             if (n % j === 0) {
//                 isPrime = false;
//                 break;
// }}}
//     if (isPrime) {
//         firstPrime = n;
//         break;
//     }
// }
// if (firstPrime !== null) {
//     console.log("First Prime Number: " + firstPrime);
// } else {
//     console.log("No Prime Number Found");
// }

function findfact(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    result *= i;
  }
  return result;
}
console.log(findfact(5))