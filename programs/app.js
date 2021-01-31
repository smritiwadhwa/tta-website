let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}




function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "(User)".fontsize(3).sup();
  const smallCompWord = "(Computer)".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord (userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}! You win!`;
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore.innerHTML = computerScore;
  const smallUserWord = "(User)".fontsize(3).sup();
  const smallCompWord = "(Computer)".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord (userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}! You win!`;
}
function draw(userChoice, computerChoice) {

  const smallUserWord = "(User)".fontsize(3).sup();
  const smallCompWord = "(Computer)".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord (userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallCompWord}! It's a Draw!`;
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
  }


}

<div id="slideshow">
        <img src="https://i.pinimg.com/originals/0e/eb/55/0eeb550262c665e3e71abb349653b1d5.png" alt="Rainbow lorakeets" />
        <img src="https://vignette.wikia.nocookie.net/mlp/images/d/d6/FANMADE_Twilight_Sparkle_vector_by_cadence176761.svg/revision/latest?cb=20140601100401"alt="Butterfly" />
        <img src="https://www.kasandbox.org/programming-images/animalhttps://vignette.wikia.nocookie.net/mlpfanart/images/8/8e/Rainbow_Dash_by_Nethear.png/revision/latest?cb=20120530035934" alt="Cat" />
        <img src="https://vignette.wikia.nocookie.net/mlpfanart/images/9/97/Applejack_Standing.png/revision/latest?cb=20150418031724" alt="Crocodiles" />
        <img src="https://i.pinimg.com/originals/cf/7d/9a/cf7d9a415a6853acc51e18da371f2d78.png" alt="Fox" />
    </div>

    /**
     * This function takes in a reference to a DOM element,
     * assumes each of its children are <img> tags,
     * and then makes a simple slideshow out of the images.
     * @param container A DOM element
     */
    var slideShow = function(container) {
        this.images = [];
        this.curImage = 0;
        for (i = 0; i < container.childElementCount; i++) {
            this.images.push(container.children[i]);
            this.images[i].style.display = "none";
        }

        // Handle going to to the next slide
        var nextSlide = function() {
            for (var i = 0; i < this.images.length; i++) {
                this.images[i].style.display = "none";
            }
            this.images[this.curImage].style.display = "block";
            this.curImage++;
            if (this.curImage >= this.images.length) {
                this.curImage = 0;
            }
            window.setTimeout(nextSlide.bind(this), 500);
        };

        nextSlide.call(this);
    };

    slideShow(document.getElementById("slideshow"));
    </script>










function main(){
  rock_div.addEventListener("click", function() {
    game("r");
  })
  scissors_div.addEventListener("click", function() {
    game("s");
  })
  paper_div.addEventListener("click", function() {
    game("p");
  })
}
main();
