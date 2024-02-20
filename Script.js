let user_score=0;
let computer_score=0;
let choices=document.querySelectorAll(".choice");

let generate_computer_choice=()=>{
    let options = ["rock" , "paper" , "Scissor"];
    let random_index=Math.floor(Math.random()*3);
    return options[random_index];

}

let msg=document.getElementById("msg");

let draw=()=>{
    console.log("Game drawn");
    msg.innerText="Game drawn";
    msg.style.backgroundColor="white"
    
}

let userscore=document.getElementById("user-score");
let Computer_score=document.getElementById("comp-score");


let showWinner=(userWin)=>{
    if(userWin){
        user_score++;
        userscore.innerText=user_score;
        console.log("You Win !");
        msg.innerText="You Won !";
        msg.style.backgroundColor="green";
    }
    else{
        computer_score++;
        Computer_score.innerText=computer_score;
        console.log("You Loose !");
        msg.innerText="You Loose !";
        msg.style.backgroundColor="red";     

    }
}

const comp = document.querySelector('#comp-score');
const user = document.querySelector('#user-score');

let playgame=(userchoice)=>{
    console.log("user choice = " , userchoice);
    let computer_choice=generate_computer_choice();
    console.log("Computer Choice = " , computer_choice);
    
    if (userchoice===computer_choice){
        draw();
        
        
    }
    else {
        let userWin=true;
        if(userchoice==="rock"){
            userWin=computer_choice==="paper"?false:true; //condition ? expressionIfTrue : expressionIfFalse;
        }
        else if(userchoice==="paper"){
            userWin=computer_choice==="scissors"?false:true;
        }
        else{
            userWin=computer_choice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
    

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userchoice=choice.getAttribute("id");

        playgame(userchoice);
    })
})
