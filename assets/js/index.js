const game = {
  win_score: 5,
  players: {
    computer: {
      selection: null,
      score: 0,
    },
    you: {
      selection: null,
      score: 0,
    },
  },
  selections: ["rock", "paper", "scissor"],
  elements: {
    computerScore: document.getElementById("computerScore"),
    youScore: document.getElementById("youScore"),
    emotes: document.getElementById("emotes"),
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissor: document.getElementById("scissor"),
    alert: document.getElementById("gameAlert"),
    actionButtons: document.getElementById("buttons"),
  },
  win() {
    this.players.you.score += this.win_score;
    this.elements.youScore.innerText = this.players.you.score;

    this.elements.alert.style.visibility = "visible";
    this.elements.actionButtons.style.visibility = "visible";

    this.elements.alert.innerHTML = `*** <b>You Win</b> *** <br /><br />
          <span><b>You:</b> ${this.players.you.selection}</span> <br /> <span><b>Computer:</b>  ${this.players.computer.selection}</span`;

    /* You Lose !
     */
    this.elements.alert.style.textAlign = "center";
    this.elements.alert.style.backgroundColor = "green";
    this.elements.alert.style.color = "white";
    this.elements.alert.style.fontSize = "22.5px";
  },
  draw() {
    this.players.you.score += 1;
    this.elements.youScore.innerText = this.players.you.score;
    this.players.computer.score += 1;
    this.elements.computerScore.innerText = this.players.computer.score;
    this.elements.alert.innerHTML = `<b>Draw !</b> <br /><br />
    <span><b>You:</b> ${this.players.you.selection}</span> <br /> <span><b>Computer:</b>  ${this.players.computer.selection}</span>`;

    this.elements.alert.style.textAlign = "center";
    this.elements.alert.style.backgroundColor = "lightblue";
    this.elements.alert.style.color = "black";
    this.elements.alert.style.fontSize = "22.5px";

    this.elements.alert.style.visibility = "visible";
    this.elements.actionButtons.style.visibility = "visible";
  },
  lose() {
    this.players.computer.score += this.win_score;
    this.elements.computerScore.innerText = this.players.computer.score;

    this.elements.alert.innerHTML = `<b>You Lose !</b> <br /><br />
    <span><b>You:</b> ${this.players.you.selection}</span> <br /> <span><b>Computer:</b>  ${this.players.computer.selection}</span>`;

    this.elements.alert.style.textAlign = "center";
    this.elements.alert.style.backgroundColor = "red";
    this.elements.alert.style.color = "white";
    this.elements.alert.style.fontSize = "22.5px";

    this.elements.alert.style.visibility = "visible";
    this.elements.actionButtons.style.visibility = "visible";
  },
  start() {
    console.log("Game Start");

    switch (this.players.you.selection) {
      case "rock":
        if ("scissor" === this.players.computer.selection) {
          this.win();
        }
        if ("paper" === this.players.computer.selection) {
          this.lose();
        }

        if ("rock" === this.players.computer.selection) {
          this.draw();
        }
        break;
      case "paper":
        if ("scissor" === this.players.computer.selection) {
          this.lose();
        }
        if ("paper" === this.players.computer.selection) {
          this.draw();
        }

        if ("rock" === this.players.computer.selection) {
          this.win();
        }
        break;

      case "scissor":
        if ("scissor" === this.players.computer.selection) {
          this.draw();
        }
        if ("paper" === this.players.computer.selection) {
          this.win();
        }

        if ("rock" === this.players.computer.selection) {
          this.lose();
        }
        break;
    }

    console.table(this.players);
  },
  restart() {
    // Computer
    this.players.computer.selection = null;
    // You
    this.players.you.selection = null;

    // Element Action

    this.elements.rock.removeEventListener("click");

    this.elements.alert.style.visibility = "hidden";
    this.elements.actionButtons.style.visibility = "hidden";
  },
  reset() {
    // Computer
    this.players.computer.selection = null;
    this.players.computer.score = 0;
    this.elements.computerScore.innerText = this.players.computer.score;
    // You
    this.players.you.selection = null;
    this.players.you.score = 0;
    this.elements.youScore.innerText = this.players.you.score;
    // Element Action
    this.elements.alert.style.visibility = "hidden";
    this.elements.actionButtons.style.visibility = "hidden";
  },
};

console.log(`Rock Paper Scissor Game Score Table :`, game);

// Stone
document.getElementById("rock").addEventListener("click", (e) => {
  console.log("Rock Selected");
  game.players.computer.selection =
    game.selections[Math.floor(Math.random() * 3)];

  game.players.you.selection = game.selections[0];
  game.start();
 
});
document.getElementById("paper").addEventListener("click", (e) => {
  console.log("Paper Selected");
  game.players.computer.selection =
    game.selections[Math.floor(Math.random() * 3)];

  game.players.you.selection = game.selections[1];
  game.start();
});
document.getElementById("scissor").addEventListener("click", (e) => {
  console.log("Scissor Selected");
  game.players.computer.selection =
    game.selections[Math.floor(Math.random() * 3)];
  game.players.you.selection = game.selections[2];
  game.start();
});
