let resultado = false && false;
let resultado1 = false && true;
let resultado2  = true && false;
let resultado3 = true && true;

console.log("AND");

console.log("A B R");
console.log("0"+"|0"+"|"+"0"+"->"+resultado);
console.log("0"+"|1"+"|"+"0"+"->"+resultado1);
console.log("1"+"|0"+"|"+"0"+"->"+resultado2);
console.log("1"+"|1"+"|"+"1"+"->"+resultado3);


let resultado4 = false || false;
let resultado5 = false || true;
let resultado6  = true || false;
let resultado7 = true || true;

console.log("OR");

console.log("A B R");
console.log("0"+"|0"+"|"+"0"+"->"+resultado4);
console.log("0"+"|1"+"|"+"0"+"->"+resultado5);
console.log("1"+"|0"+"|"+"0"+"->"+resultado6);
console.log("1"+"|1"+"|"+"1"+"->"+resultado7);


let resultado8 = false != true;

console.log("NOT");

console.log("A B R");
console.log("0"+"|1"+"->"+resultado8);
console.log("1"+"|0"+"->"+resultado8);