const input=document.getElementById("input");

function reversString(str){
    return str.split("").reverse().join("")
}


function check(){
    const value=input.value;
    const revers=reversString(value);

    if (revers===value){
        s=`Yes ${value} is a palandrom`
        alert(s)
    }
    else{
        s=`No ${value} is not a palandrom`
        alert(s)
    }
};