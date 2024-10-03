const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(5);
    },1000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000)
})

const addPromise=async()=>{
    try{
        let value1= await promise1;
        let value2=await promise2;
        
        let sum=value1+value2;
        console.log("Sum is ..........",sum);
    }
    catch(e){
        console.log(e.message);
    }
}
addPromise();