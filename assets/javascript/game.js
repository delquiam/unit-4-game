$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;
    var magicNumber = 0;
    var crystalNumber1 = 0;
    var crystalNumber2 = 0;
    var crystalNumber3 = 0;
    var crystalNumber4 = 0;

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
                *++ wins
            *else if score>magic number
                *call reset function
                *++losses */

    function generateRandomMagicNumber() {
        magicNumber = Math.floor(Math.random() * 101)+19;
        $("#random").html("");
      }
        
    function generateCrystalNumber1() {
        crystalNumber1 = Math.floor(Math.random() * 11) + 1;
       
    }
    function generateCrystalNumber2() {
        crystalNumber2 = Math.floor(Math.random() * 11) + 1;
        
    function generateCrystalNumber3() {
        crystalNumber3 = Math.floor(Math.random() * 11) + 1;
        
    }
    function generateCrystalNumber4() {
        crystalNumber4 = Math.floor(Math.random() * 11) + 1;
        
    }
    function reset(){        
       score=0;      
    }
   
    };

});