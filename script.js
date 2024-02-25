let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let mesgContainer=document.querySelector(".mesg-container");
let msg=document.querySelector("#mesg");
let turnO=true;
let count=0;


const winPatters=[
    [0,1,2], [0,3,6], [0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    mesgContainer.classList.add("hide");
}

let Xwin=0;
let Owin=0;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="purple";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="gold";
            turnO=true;
            
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        console.log(count);
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText='Game was Draw.';
    mesgContainer.classList.remove("hide");
    disableBoxes();

}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    mesgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = ()=>{
    for(let pattern of winPatters){
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            if(pos1Val==='O'){
                Owin++;
            }
            else{
                Xwin++;
            }
            showWinner(pos1Val);
            return true;
        }
       }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
// class Myclass{
//     start(){
//      console.log("Start");
//     }
//     stop(){
//      console.log("Stop");
//     }
//  }