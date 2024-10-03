// function x(){
//     var a=7;
//     y();
//     function y(){
//         console.log(a);
//     }
    
// }
// x();

//closures is function bind together with lexical enviroment
function x(){
    var a=7;
   
    function y(){
        console.log(a);
    }
    return y;
    
}
var z=x();
// console.log(z);  return y function  when return y not only function return closure is return  

z();
