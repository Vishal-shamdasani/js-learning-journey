function faultyCalculator(op){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    if (Math.random()>0.1){
        if (op=="+"){
            document.getElementById("result").innerHTML=num1+num2;}
        else if (op=="-"){
            document.getElementById("result").innerHTML=num1-num2;}
        else if (op=="*"){
            document.getElementById("result").innerHTML=num1*num2;}
        else if (op=="/"){
            document.getElementById("result").innerHTML=num1/num2;}

    }
    else{
        if (op=="+"){
            document.getElementById("result").innerHTML=num1-num2;
        }
        else if (op=="-"){
            document.getElementById("result").innerHTML=num1+num2;
        }
        else if (op=="*"){
            document.getElementById("result").innerHTML=num1/num2;
        }
        else if (op=="/"){
            document.getElementById("result").innerHTML=num1*num2;
        }
    }

}

