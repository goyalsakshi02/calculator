function num(val) {
  document.getElementById("calculatorInput").value += val;
}

function add() {
  document.getElementById("calculatorInput").value += '+';
}


function subs() {
  document.getElementById("calculatorInput").value += '-';
}

function multiply() {
  document.getElementById("calculatorInput").value += '*';
}
function division() {
  document.getElementById("calculatorInput").value += '/';
}
function clr() {
  document.getElementById("calculatorInput").value = "" ;
}

function equals() {

  let exp = document.getElementById("calculatorInput").value
  const operation = ["/","*","-","+"];
  let  num = []
  const opToPerform = []
  var lastIndex = -1

for (i = 0; i <= exp.length; i++) {

  if (operation.includes(exp[i]) || (i === exp.length)) {
    
    let subString = exp.substring(lastIndex + 1, i);
     
     num.push(+subString);
    
    if(exp[i] !== undefined){
      num.push(exp[i])
    }

      lastIndex = i
     
  }
}

  for(let k=0; k < operation.length; k++ ){
    
    
     tempNum = [];
    
    for (i=0; i<num.length; i++) {
      
     let store = num[i]
      
    let skip = false
    let currentOp = ''
      
      
     switch (true) {
       case String(num[i]) == String(operation[k]):
        let val1 = num[i-1]
        let val2 = num[i+1]
        let rVal;
        if( operation[k] == '/'){
            rVal = val1 / val2;
        }else if(operation[k] == '*'){
          rVal = val1 * val2;
          
        } else if(operation[k] == '-'){
          rVal = val1 - val2;
          
        } else if(operation[k] == '+'){
          rVal = val1 + val2;
          
        }
        
        tempNum.pop()
        tempNum.push(rVal)
        i += 1
        //skip = true;
         break ;
       default :
        skip = false
        tempNum.push(store)
        break;
      }      
      //console.log('tempNum', tempNum)
    }
    num = tempNum;
    }
    
    
  document.getElementById("calculatorInput").value = num ;
}