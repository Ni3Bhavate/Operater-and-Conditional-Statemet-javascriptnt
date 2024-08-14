 /* const product = {
    title : "Ball pen",
    rating: 5,
    offer : 3,
    price :210
}
console.log(product);


const profile = {
    name : "Nitin Bhavate",
    isfollow:true,
    post:195,
    mail:"nitinBhvate",
   detais:"PILIT College Buildana"
};
console.log(typeof profile["name"]);
console.log(typeof profile["isfollow"]);
console.log(typeof profile["post"]);
console.log(typeof profile["mail"]);
console.log(typeof profile["detais"]);

/* let a = 5;
let b = 3;

console.log("5 < 3", a < b);

let c = 8;
let d = 10;

console.log("8 < 10 ", c < d); 
*/
/*
let nums = 255;
 if (nums%2==0 ) {
    console.log("This is even number")
 }
 if (nums%2==!0){
 console.log("This is odd number");
 }
*/

// let nums = 21;
// if (nums%2==0){
//     console.log("This is even number");
// }else{
//     console.log("This is odd number");
// }
/*
let age = 2;

if(age >= 18 || age <=120){
    console.log("You can vote ");
}else if(age < 18 ){
   console.log("You can not vote")
}else {
    console.log("You can aaa")
}
*/
/*
let age = 2;

let result = age >=18 ? "adult" : "not adult";
console.log(result);
*/
/*
let nums = prompt("Enter a number:");

if(nums % 5 === 0) {
    console.log(nums," is multiple of 5");
} else {
    console.log(nums,"is not multiple of 5")
}
    */

let marks = prompt("Enter a marks (0-100)");

//  let marks = 90;
if (marks <= 100 && marks >=90){
    console.log("Grade A");
}else if(marks <=89 && marks >=70){
    console.log("Grade B");
}else if(marks <=69 && marks >=60){
    console.log("Grade C");
}else if(marks <=59 && marks >=50){
    console.log("Grade D");    
}else if(marks <=49){
    console.log("Grade F");
}

