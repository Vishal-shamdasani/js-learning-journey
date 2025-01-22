let user=0
let comp=0

function play(choise){
    let computerChoise=Math.floor(Math.random()*3)
    if (choise==computerChoise){
        document.getElementById("result").innerHTML="Draw"
    }
    else{
        if((choise==0 && computerChoise==2)||(choise==1&&computerChoise==0)||(choise==2&&computerChoise==1)){
            user++
            document.getElementById("result").innerHTML="You win"
            }
        else{
            comp++
            document.getElementById("result").innerHTML="You Lose"
        }
        }
    document.getElementById("score").innerHTML=`you have won ${user} times and lost ${comp} times`
    }
