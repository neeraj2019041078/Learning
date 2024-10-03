const obj={a:1,b:{
    c:"hello"
}}

const shallow={...obj}

shallow.a=4
shallow.b.c="bye"

console.log(obj);
console.log(shallow);

// const deep=JSON.parse(JSON.stringify(obj));

// deep.a="2";
// deep.b.c="bye";
// console.log(obj);
// console.log(deep);