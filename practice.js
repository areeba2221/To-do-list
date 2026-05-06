// let smallroom_price = 10;
// let largeroom_price = 15;

// let smallrooms = 2;
// let largerooms = 2;

// let totalsmallroomprice = smallrooms * smallroom_price;
// let totallargeroomsprice = largerooms * largeroom_price;

// let addroomsprice = totalsmallroomprice + totallargeroomsprice

// let tax = addroomsprice * 0.10

// let grandtotal = addroomsprice + tax;

// console.log("Small single room price $" + smallroom_price);
// console.log("Large single room price $" + largeroom_price);
// console.log("small rooms price is $" + totalsmallroomprice);
// console.log("Large rooms price is $" + totallargeroomsprice);
// console.log("Total room price is $" + addroomsprice);
// console.log("Add tax $" + tax);
// console.log("Grand total is $" + grandtotal);

// let sub1 = 63;
// let sub2 = 75;
// let sub3 = 65;
// let sub4 = 42;
// let sub5 = 58;
 

// let percentage = ((sub1 + sub2 + sub3 + sub4 + sub5) / 500) * 100

// if (percentage > 90) {
//   console.log("Excelent " + percentage);
// } else if (percentage > 80) {
//   console.log("WELL DONE " + percentage);
//   }
//   else if (percentage > 70) {
//   console.log("great job " + percentage);
//   }
//   else if (percentage > 60) {
//   console.log("good job " + percentage);
//   }
//   else if (percentage > 40) {
//   console.log("you pass " + percentage);
// } else {
//  console.log("fail " + percentage);
// }
  
// factorial
// let num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   // some statements
//   factorial *= i
// }

// console.log(factorial)




// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(myCar.make); // "Honda"
// myFunc(myCar);
// console.log(myCar.make); // "Toyota"


// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(factorial(6)); // 6



// prime number
// let num = [2, 4,5,7,9];
// let isprime = 0;
// for(let i = 2; i <= num; i++) {
//   if(num % 2 == 0){
//     isprime = 1;
//     break;
//   }
// }
// if(isprime == 0) {
//   console.log("it is prime number " + num)
// } else {
//   console.log("is it not prime number " + num)
// }
// let primes = num.filter(isprime);
// console.log(primes);

// let number = [ 8, 7, 5, 2, 6];

// number = number.filter((num) => {
// for (let i = 2; i <= Math.sqrt(num); i++) {
// if (num % i === 0) {
// return false;
// }
// return true;
// }
// });
// console.log(number);


let persons = [
    { name: "john", age: 20 },
    { name: "Deo", age: 15 },
    { name: "Asim", age: 22 },
    { name: "Zia", age: 13 }
];

persons.forEach((person) => {
    console.log(person.name + " - " + person.age);
});
let filteredPersons = persons.filter((person) => {
    return person.age < 16;
});
console.log(" Age below 16 ");
filteredPersons.map((person) => {
    console.log(person.name + " - " + person.age);
});


