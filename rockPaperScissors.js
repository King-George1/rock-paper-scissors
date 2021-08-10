const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }
    console.log("ERROR");
    return;
  }
  
  const getComputerChoice = () => {
    let compInput = Math.floor(Math.random()*3);
    if(compInput === 0){
      return 'rock';
    }
    else if(compInput === 1){
      return 'paper';
    }
    else{
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return 'The user won';
    }
    else if(userChoice === computerChoice){
      return `The game was a tie`;
    }else{
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'The computer won';
        }
        else{
          return 'The user won';
        }          
      }
  
      if(userChoice === 'paper'){
      if(computerChoice === 'scissors') {
        return 'The computer won';
      }else{
        return 'The user won';
      } 
      }
  
      if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          return 'The computer won'
        }else{
          return 'The user won'
        }  
      }
    }
  }
  
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();