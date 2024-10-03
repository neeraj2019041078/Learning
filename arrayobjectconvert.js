//array to object reduce is always use when array of object
// const hello=[{name:'neeraj',lastname:'verma'}]

// const helloobject=hello.reduce((acc,curr)=>{
//     acc.name=curr.name
//     acc.lastname=curr.lastname
//     return acc;
// },{})

// console.log(helloobject)

//object to array


// const object={name:'hello',age:'23'}

// const array=Object.entries(object)
// const array1=Object.keys(object)
// console.log(array)
// console.log(array1)
const arr = ["fName", "Neeraj", "lName", "Verma", "age", 24];
const obj = {};
// for(let i = 0; i < arr.length; i += 2){
//     let key = arr[i];
//     let value = arr[i+1];
//     obj[key] = value;
//     // obj[arr[i]] = arr[i+1]
// }

arr.map((value, key)=>{
    if(key % 2 == 0){
        obj[value] = arr[key+1]
    }
    // console.log(value)
})
console.log(obj)
// array to object

// const resultObject = Object.fromEntries(
//   arr.reduce((acc, curr, index, array) => {
//     if (index % 2 === 0) {
//       acc.push([curr, array[index + 1]]);
//     }
//     return acc;
//   }, [])
// );

// console.log(resultObject);

// const resultObject = Object.fromEntries(
//     arr.map((item, index, array) => {
//       if (index % 2 === 0) {
//         return [item, array[index + 1]];
//       }
//     }).filter(Boolean)
//   );
  
//   console.log(resultObject); 