function buttonClickHandler() {

    let selecter = document.getElementById("select1");
    
    console.log(selecter.value);
    
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let res;
    if (selecter.value == "plus") {
     res = parseFloat(value1) + parseFloat(value2);
    }
    if (selecter.value == "minus") {
     res = parseFloat(value1) - parseFloat(value2);
    }
    if (selecter.value == "mul") {
        res = parseFloat(value1) * parseFloat(value2);
       }
    if ((selecter.value == "div")&&(parseFloat(value2)!=0)) {
        
        res = parseFloat(value1) / parseFloat(value2);
       }
    
    document.getElementById("result").innerText = res;
    

    console.log(res);
    
}