var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

function pcChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice.toUpperCase() + " ganha de " + computerChoice.toUpperCase() + ". Você venceu!"
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")}, 800);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice.toUpperCase() + " perde para " + computerChoice.toUpperCase() + ". Você perdeu!"
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")}, 800);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice.toUpperCase() + " é igual " + computerChoice.toUpperCase() + ". Empatou!"
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("gray-glow")}, 800);
}

function jogo(userChoice) {
    const compChoice = pcChoice();
    switch (userChoice + compChoice) {
        case "pedratesoura":
        case "papelpedra":
        case "tesourapapel":
            win(userChoice, compChoice);
            break
        case "tesourapedra":
        case "pedrapapel":
        case "papeltesoura":
            lose(userChoice, compChoice);
            break
        case"tesouratesoura":
        case "pedrapedra":
        case "papelpapel":
            draw(userChoice, compChoice);
            break
    }    
}

function main() {

    pedra.addEventListener("click", function() {
        jogo("pedra");
    })

    papel.addEventListener("click", function() {
        jogo("papel");
    })

    tesoura.addEventListener("click", function() {
        jogo("tesoura");
    })
}

main();
