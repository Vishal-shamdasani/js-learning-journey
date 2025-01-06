const body=document.getElementsByTagName("body")[0];


function changeColor(color){
    if (color=="random"){
        const red=Math.round(Math.random()*255);
        const blue=Math.round(Math.random()*255);
        const green=Math.round(Math.random()*255);
        body.style.backgroundColor=`rgb(${red},${blue},${green})`;
    }
    else{
    body.style.backgroundColor=color;
    }
}