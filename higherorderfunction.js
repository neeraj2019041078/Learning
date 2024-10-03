// higher order function is passed another  to arguement and return that function is called high order function
const radius=[3,2,1,4]

// 1st way better

const area=function(radius){
    return Math.PI*radius*radius
}



// const calculate=function(radius,logic){
//     output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))

//         return output;
//     }
// }

// console.log(calculate(radius,area))

// // 2nd way 

// const calculate=function(radius){
//     output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }
// console.log(calculate(radius))
Array.prototype.calculate=function(logic){
    const output=[]

    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log(radius.calculate(area))