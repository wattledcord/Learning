console.log(parseInt('10.2abc',10))
console.log(parseInt('31231hello Madhav',10))//0x10 hexadeciaml notation is there 
console.log(+'42abc');
console.log('Madhav'.toUpperCase());
console.log(null,"non-value");
console.log(undefined,"Not Initialized or invalid type");
let a;
let name="Madhav Reddy";
console.log(a);
console.log(name);
// myVarVariable *is* visible out here 
function name1(some) {
    for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
        console.log("Inside",myVarVariable);
        // myVarVariable is visible to the whole function 
      } 
      console.log("After",myVarVariable);    
}
console.log(3+5+4+4+'');
// console.log(o && o.get());

  // myVarVariable *is* visible out here