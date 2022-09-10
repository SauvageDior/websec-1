function buttonClickHandler() {

    let selecter = document.getElementById("select1");
    
    console.log(selecter.value);
    
    let value1 = document.getElementById("input1").value;
    //if (isNaN(value1)) {alert('введите число 1')}
    let value2 = document.getElementById("input2").value;
    //if (isNaN(value2)) {alert('введите число 2')}
    let res;
    let total = "";
    let x;

    if ((isNaN(value1))||(isNaN(value2))||(!value1)||(!value2)) {
        alert('число нада(((((');
        document.getElementById("result").innerText = "не числа(";
    }
    else {

    if (selecter.value === "plus") {
     res = parseFloat(value1) + parseFloat(value2);
    }
    if (selecter.value === "minus") {
     res = parseFloat(value1) - parseFloat(value2);
    }
    if (selecter.value === "mul") {
        res = parseFloat(value1) * parseFloat(value2);
       }
    if ((selecter.value === "div")&&(Math.abs(parseFloat(value2)) > Number.EPSILON)) {
        res = parseFloat(value1) / parseFloat(value2);
       }
    else if ((selecter.value === "div")&&(Math.abs(parseFloat(value2)) < Number.EPSILON))
    {
        res = "ответа нет(";
    }
    
    
    document.getElementById("result").value  +=   value1 +" "+ selecter.value +" "+ value2 + " = " + res + '\n'; 
    
    

    }
    
    
    

    console.log(res);
    
}