let score = JSON.parse(localStorage.getItem('score')) || {wins : 0,losses : 0,ties : 0};
    updatescoreelement();
        

    function pickComputerMove(){
            const randomMove = Math.random();
            let computerMove = '';
            if(randomMove >= 0 && randomMove < 1/3){
                computerMove = 'rock';
            } else if(randomMove >= 1/3 && randomMove < 2/3){
                computerMove = 'paper';
            } else if(randomMove >= 2/3 && randomMove < 1){
                computerMove = 'scissors';
            }
            return computerMove;
        }    
        
    document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            playGame('rock');
    }); 
        

    function playGame(playerMove){

            const computerMove = pickComputerMove();



            let result = '';
            if(playerMove === 'rock'){
                    if(computerMove === 'rock'){
                    result =  'it\'s a Tie.';
                    } else if(computerMove === 'paper'){
                    result = 'You Lost.';
                    } else if(computerMove === 'scissors'){
                    result ='You Won.';
                    }
            }else if(playerMove === 'paper'){
                    if(computerMove === 'rock'){
                    result = 'You Won.';
                    } else if(computerMove === 'paper'){
                    result =  'it\'s a Tie.';
                    } else if(computerMove === 'scissors'){
                    result = 'You Lost.';
                    }
            }else if(playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You Lost.';
                }else if(computerMove === 'paper'){
                    result = 'You Won.';
                }else if(computerMove === 'scissors'){
                    result =  'it\'s a Tie.';
                }
            }


            if(result === 'You Won.'){
                score.wins += 1;
            }else if(result === 'You Lost.'){
                score.losses += 1;
            }else if(result === 'it\'s a Tie.'){
                score.ties += 1;
            }
 

            localStorage.setItem('score',JSON.stringify(score));
            updatescoreelement();

            document.querySelector('.js-result').innerHTML = `${result}`;
            
            document.querySelector('.js-moves').innerHTML = `your move <img src= "${playerMove}-emoji.png" class ="images">  |  computer move <img src= "${computerMove}-emoji.png" class ="images">`;
        }       
    function updatescoreelement(){
        document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
     }   
     isAutoplaying = false;
    let intervalID; 

    function autoPlay(){
        if(!isAutoplaying){
            intervalID = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoplaying = true;
        }else{ 
            clearInterval(intervalID);
            isAutoplaying = false;
        }    
    }
