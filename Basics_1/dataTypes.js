/*there are two types of data types primitve and non primtive
1).Primitive:- Number,Boolean, string, Null, undefined, BigInt, symbol
2). refernceType(non-primitve):- Array, object, function*/ 


function dataType(value){
    console.log(typeof(value));
}
// let nullValue=null;
// dataType(nullValue);
// //Object

// let symbolType=Symbol(123);
// dataType(symbolType); 
// //symbol

let array=["jitu","rishi",1,2];
dataType(array);
//object

const obj={
    a:1,
    b:"jitu",
    c:false,
};
dataType(obj);
//object

let func=function print(){
    console.log("im a function");
}
dataType(func);
//function

