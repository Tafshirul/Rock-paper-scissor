let userscore = 0;
let comscore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.getElementById("msg");

const userscorepera = document.getElementById("your");
const comscorepera = document.getElementById("computer");

const genarateComputerChoice = () => {
  const option = ["rock","paper","scissor"];
   const randIdx = Math.floor(Math.random() * 3);
   return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw.play again";
  msg.style.backgroundColor = "#461870";
};

const showWinner = (userwin, userChoise, comChoise) => {
  if(userwin) {
    userscore++;
    userscorepera.innerHTML = userscore;
    msg.innerText = `You Win! Your ${userChoise} Beats ${comChoise}`;
    msg.style.backgroundColor = "green";
  }else {
    comscore++;
    comscorepera.innerHTML = comscore;
    msg.innerText = `You Lose ${comChoise} Beats Your ${userChoise}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoise) =>{
  console.log("user choise = ", userChoise);
  const comChoise = genarateComputerChoice();

  if(userChoise === comChoise){
    drawGame ();
  } else {
    let userwin = true;
    if(userChoise === "rock"){
       userwin = comChoise === "paper" ? false : true;
    }else if(userChoise === "paper") {
       userwin = comChoise === "scissor" ? false : true;
    }else{
       userwin = comChoise === "rock" ? false : true;
    }
    showWinner(userwin ,userChoise, comChoise);
  }
};

choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    const userChoise = choise.getAttribute("id");
    playGame (userChoise);
  })
});