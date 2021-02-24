console.log("This is Function Tutorial");

// let name1 = "ramesh";
// let name2 = "divyesh";
// let name3 = "pranjal";
// let name4 = "aman";
// let name5 = "ram";
// let name6 = "shayam";
// let name7 = "suresh";
// console.log(name1 + " is my good friend");
// console.log(name2 + " is my good friend");
// console.log(name3 + " is my good friend");
// console.log(name4 + " is my good friend");
// console.log(name5 + " is my good friend");
// console.log(name6 + " is my good friend");

// we can use here function as we repeat ourself again and again

function greet(name, greetText){
    // let name1 = 'Name1'; local scope variable
    console.log(`${name} ${greetText}`);
    console.log(name + " is a good friend of mine");
}

// global variable scope
let name1 = "ramesh";
let name2 = "divyesh";
let name3 = "pranjal";
let name4 = "aman";
let name5 = "ram";
let name6 = "shayam";
let name7 = "suresh";
let greetText = "Good Morning";

// function call
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
greet(name5, greetText);
greet(name6, greetText);
greet(name7, greetText);

// returning some value

function sum(a,b,c){
    d = a+b+c;
    return d;
}

sum(5,6,8);
console.log(d);

function max(a,b){
    if (a>b) {
        console.log(`${a} is greater than ${b}`);
    }
    else{
        console.log(`${b} is greater than ${a}`);
    }
}

max(5,4);
max(45696,2585);
max(488,285);
max(255,598);
max(474,36986);
max(555,3366);
max(485,200);