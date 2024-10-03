// {
//     // block is also called compund statement
//     //combining multiple statement use it in a one statement

// }
// if (true) {
//     var a =10;
//     console.log(a);
// }

//block scope let const hosted between curly bracket and acess


//shadowing


// var a=20;
// {
//     var a=30;
//     console.log(a);

//     //because a is pointed to same memory space
// }
// console.log(a);




// let a=20;
// {
//     let a=30;
//     console.log(a);
//     //block scope
// }

// console.log(a);
// //script scope


// illegal shadowing


// you shadow let using let but you can't shadow let using var
// let and const aur redeclare in block is legal shadowing but let  and var in block with same is illegal shadowing

// every block have their own block space