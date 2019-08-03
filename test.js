// var a = [1, 2, 3];
// var b = [4, 5, ...a, 6, 7];
// // console.log(b);


// // var c = a;
// var c = [...a];
// console.log(c === a);

// var obj = {
//     name: "Vinod"
// }

// // var newObj = obj;

// var newObj = { ...obj, isTeacher: true };

// newObj.name = "Changed";

// console.log(obj);
// console.log(newObj);



// function display(one, two, three, four) {
//     console.log("one ", one);
//     console.log("two ", two);
//     console.log("three ", three);
//     console.log("four ", four);
// }

// display(...a);

// const numbers = [1, 2, 3, 4, 5]

// const first = numbers[0];
// const second = numbers[1];
// const others = [numbers[2], numbers[3], numbers[4]];



// const [first, second, ...others] = numbers;

// console.log(first);
// console.log(second);
// console.log(others);

var designation = "Coder";
var dob = new Date();

var info = `Hi, 
My 
Name 
Is
Vinod, My Designation Is: 
${designation} and Time is ${dob}`;

console.log(info);

