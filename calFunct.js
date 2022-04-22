let  operands = [];
let operators = [];

function num(val) {
  document.getElementById("gout").innerHTML += val;

function add() {
  document.getElementById("gout").innerHTML += '+';


function Substract() {
  document.getElementById("gout").innerHTML += '-';


function multiply() {
  document.getElementById("gout").innerHTML += '*';

function division() {
  document.getElementById("gout").innerHTML += '/';

function equals() {

  let data = document.getElementById("gout").innerHTML;
  
  for( let i=0; i<data.length; i++){
    
    let ch = data[i]
    
    if(ch === '+' || ch === '-' || ch === '/' || ch === '*'){
       while(operators.length()>0){
          let optr = operators.pop()
          let val2 = operands.pop()
          let val1 = operands.pop()

          let res = operation(val1, val2, optr)
          console.log("res",res)
         }
      }
    else{
      operands.push(parseint(ch))
    }
    }
      
    }

function Operation (a , b , op) {
  if ( op === '+'){
    return a+b
  }
  else if (op === '-'){
    return a-b
  }
  else if (op === '*') {
    return a*b
  }
  else {
    return a/b
  }
}

function operatorOrders(op) {
  if (op === '-' && op === '+') {
    return 1
  }
  else {
    return 2
  }
}
