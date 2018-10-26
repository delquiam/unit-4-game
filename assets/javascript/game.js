$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var magicNumber = 0;
    var totalScore = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    /*
    ON PAGE LOAD
        *generate random magic number (19-120)
            *display magic number on html
        *generate random crystal numbers (1-12)
            *store number as a value attribute on crystal button
        *reset game function
            *call generate magic number function
            *call generate random crystal number function
            *reset score to 0
    EVENT HANDLERS
        *add crystal value attribute to score
            *get value from attribute 
            *add value to score (+=)
        *compare score with magic number
            *if score===magic number
                *call reset function
                 wins++
            *else if score>magic number
                *call reset function
                *losses++ */


    magicNumber = Math.floor(Math.random() * 101 + 19);
    $('#random').text(magicNumber);


    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;

    $('.score').text(totalScore);

    

    $('.clear').on("click", function () {
        totalScore = totalScore + crystal1;
        console.log("New totalScore= " + totalScore);
        $('#score').text(totalScore); 
        if (totalScore === magicNumber) {
           win();
        }
        else if (totalScore > magicNumber) {
            lose();
        }   
    })

    $('.white').on("click", function () {
        totalScore = totalScore + crystal2;
        console.log("New totalScore= " + totalScore);
        $('#score').text(totalScore); 
        if (totalScore === magicNumber) {
            win();
        }
        else if (totalScore > magicNumber) {
             lose();
        }
    
    })
    
    $('.blue').on("click", function () {
        totalScore = totalScore + crystal3;
        console.log("New totalScore= " + totalScore);
        $('#score').text(totalScore); 
        if (totalScore === magicNumber) {
             win();
        }
        else if (totalScore > magicNumber) {
            lose();
        }
    })

      
    $('.pink').on("click", function () {
        totalScore = totalScore + crystal4;
        console.log("New totalScore= " + totalScore);
        $('#score').text(totalScore);         
    if (totalScore === magicNumber) {
         win();
    }
    else if (totalScore > magicNumber) {
         lose();
    }
    })

    function reset() {
        magicNumber = Math.floor(Math.random() * 101 + 19);       
        $('#random').text(magicNumber);
        crystal1 = Math.floor(Math.random() * 11) + 1;
        crystal2 = Math.floor(Math.random() * 11) + 1;
        crystal3 = Math.floor(Math.random() * 11) + 1;
        crystal4 = Math.floor(Math.random() * 11) + 1;
        totalScore = 0;
        $('.score').text(totalScore);
    }
    function win(){
        alert("You won!");
          wins++; 
          $('#numberWins').text(wins);
          reset();
        }
       
        function lose(){
        alert ("You lose!");
          losses++;
          $('#numberLosses').text(losses);
          reset()
        }

});
