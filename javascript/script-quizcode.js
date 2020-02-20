/*
=====================================================================
*   RMG v1.0 Password Generator Javascript
*   02-19-2020
=====================================================================
*/

// Object
var codequiz = {
  "questions" : {
    question_01 : "1. What is HTML?",
    answer_01   : {
      data          : [
                        "HTML stands for Hyper Text Markup Language.",
                        "HTML stands for High Text Motion Language.",
                        "HTML stands for Height Title Media Length.",
                        "HTML stands for Hey Text Me Later."
                      ],
      correctAnswer : [
                        true,
                        false,
                        false,
                        false
                      ]
    },

    question_02 : "2. Do all HTML tags have an end tag?",
    answer_02   : {
      data          : [
                        "Yes, without exceptions.",
                        "No, there are some HTML tags that don't need a closing tag. ( <image> , <br> ).",
                        "No, there are some HTML tags that don't need a closing tag. ( <header> , <footer> ).",
                        "No, only <html>, <head>, and <body> tags need a closing tag."
                      ],
      correctAnswer : [
                        false,
                        true,
                        false,
                        false
                      ]
    },

    question_03 : "3. What is JavaScript?",
    answer_03   : {
      data          : [
                        "JavaScript is a complete programming language.",
                        "JavaScript is a Java library.",
                        "JavaScript is an object-oriented programming (OOPS).",
                        "JavaScript is a client-side scripting language."
                      ],
      correctAnswer : [
                        false,
                        false,
                        false,
                        true
                      ]
    },

    question_04 : "4. What are JavaScript Data Types?",
    answer_04   : {
      data          : [
                        "Integer  |  Float   |  Double   |  Boolean",
                        "Database |  Bigdata",
                        "Array    |  List    |  String   |  Object",
                        "Number   |  String  |  Boolean  |  Object  |  Undefined"
                      ],
      correctAnswer : [
                        false,
                        false,
                        false,
                        true
                      ]
    },

    question_05 : "5. What is the use of 'isNaN' function?",
    answer_05   : {
      data          : [
                        "'isNaN' function returns undefined if the argument is correct.",
                        "'isNaN' function returns undefined if the argument is incorrect.",
                        "'isNaN' function returns true if the argument is not a number otherwise it is false.",
                        "'isNaN' function returns true if the argument is a number otherwise it is false."
                      ],
      correctAnswer : [
                        false,
                        false,
                        true,
                        false
                      ]
    },

    question_06 : "6. Which company developed JavaScript?",
    answer_06   : {
      data          : [
                        "WebCoders is the software company who developed JavaScript.",
                        "Netscape is the software company who developed JavaScript.",
                        "JavaScript was not developed by a company.",
                        "Ubisoft is the software company who developed JavaScript."
                      ],
      correctAnswer : [
                        false,
                        true,
                        false,
                        false
                      ]
    },

    question_07 : "7. What is '===' operator?",
    answer_07   : {
      data          : [
                        "'===' is an attribution operator used in Javascript.",
                        "'===' is a strict equality operator which returns true when the two operands are having the same value without any type conversion.",
                        "'===' is not a valid equality operator, '==' is the correct equality operator.",
                        "'===' is not an operator, but a comment tag."
                      ],
      correctAnswer : [
                        false,
                        true,
                        false,
                        false
                      ]
    },

    question_08 : "8. What is jQuery?",
    answer_08   : {
      data          : [
                        "jQuery is a programming language.",
                        "jQuery is a built-in library built for JavaScript.",
                        "jQuery is the replacement of JavaScript.",
                        "jQuery is a curse to web developers."
                      ],
      correctAnswer : [
                        false,
                        true,
                        false,
                        false
                      ]
    },

    question_09 : "9. What is $( ) in jQuery library?",
    answer_09   : {
      data          : [
                        "The $( ) function returns a value in a Dollar format.",
                        "The $( ) function that calculates Bitcoin price.",
                        "The $( ) function is not important, only used to make code more understandable.",
                        "The $( ) function is an alias of jQuery( ) function."
                      ],
      correctAnswer : [
                        false,
                        false,
                        false,
                        true
                      ]
    },

    question_10 : "10. What is the use of html( ) method in JQuery?",
    answer_10   : {
      data          : [
                        "The jQuery html( ) method is used to change the entire content of the selected elements.",
                        "The jQuery html( ) method is used to build a new webpage.",
                        "The jQuery html( ) method is used to reference another HTML webpage.",
                        "The jQuery html( ) method is returns true when the HTML doesn't have any errors."
                      ],
      correctAnswer : [
                        true,
                        false,
                        false,
                        false
                      ]
    },

  }
}

$( document ).ready( function() {
  // VARIABLES
  // ====================================================================
  let questionspot = document.querySelector( ".questionspot" );
  
  let firstanswer  = document.querySelector( "#firstanswer"  );
  let secondanswer = document.querySelector( "#secondanswer" );
  let thirdanswer  = document.querySelector( "#thirdanswer"  );
  let fourthanswer = document.querySelector( "#fourthanswer" );

  var pageIndex      = 1;
  var correctAnswers = 0;

  var internal;


  // FUNCTIONS
  // ====================================================================
  function buildQuizPage( webpageIndex ) {
    // This function will create all elements of the webpage by using jQuery
    switch(webpageIndex) {

      case 1:
        questionspot.textContent = codequiz.questions.question_01;
        firstanswer.value        = codequiz.questions.answer_01.data[0];
        secondanswer.value       = codequiz.questions.answer_01.data[1];
        thirdanswer.value        = codequiz.questions.answer_01.data[2];
        fourthanswer.value       = codequiz.questions.answer_01.data[3];
        break;

      case 2:
        questionspot.textContent = codequiz.questions.question_02;
        firstanswer.value        = codequiz.questions.answer_02.data[0];
        secondanswer.value       = codequiz.questions.answer_02.data[1];
        thirdanswer.value        = codequiz.questions.answer_02.data[2];
        fourthanswer.value       = codequiz.questions.answer_02.data[3];
        break;

      case 3:
        questionspot.textContent = codequiz.questions.question_03;
        firstanswer.value        = codequiz.questions.answer_03.data[0];
        secondanswer.value       = codequiz.questions.answer_03.data[1];
        thirdanswer.value        = codequiz.questions.answer_03.data[2];
        fourthanswer.value       = codequiz.questions.answer_03.data[3];
        break;

      case 4:
        questionspot.textContent = codequiz.questions.question_04;
        firstanswer.value        = codequiz.questions.answer_04.data[0];
        secondanswer.value       = codequiz.questions.answer_04.data[1];
        thirdanswer.value        = codequiz.questions.answer_04.data[2];
        fourthanswer.value       = codequiz.questions.answer_04.data[3];
        break;

      case 5:
        questionspot.textContent = codequiz.questions.question_05;
        firstanswer.value        = codequiz.questions.answer_05.data[0];
        secondanswer.value       = codequiz.questions.answer_05.data[1];
        thirdanswer.value        = codequiz.questions.answer_05.data[2];
        fourthanswer.value       = codequiz.questions.answer_05.data[3];
        break;

      case 6:
        questionspot.textContent = codequiz.questions.question_06;
        firstanswer.value        = codequiz.questions.answer_06.data[0];
        secondanswer.value       = codequiz.questions.answer_06.data[1];
        thirdanswer.value        = codequiz.questions.answer_06.data[2];
        fourthanswer.value       = codequiz.questions.answer_06.data[3];
        break;

      case 7:
        questionspot.textContent = codequiz.questions.question_07;
        firstanswer.value        = codequiz.questions.answer_07.data[0];
        secondanswer.value       = codequiz.questions.answer_07.data[1];
        thirdanswer.value        = codequiz.questions.answer_07.data[2];
        fourthanswer.value       = codequiz.questions.answer_07.data[3];
        break;

      case 8:
        questionspot.textContent = codequiz.questions.question_08;
        firstanswer.value        = codequiz.questions.answer_08.data[0];
        secondanswer.value       = codequiz.questions.answer_08.data[1];
        thirdanswer.value        = codequiz.questions.answer_08.data[2];
        fourthanswer.value       = codequiz.questions.answer_08.data[3];
        break;

      case 9:
        questionspot.textContent = codequiz.questions.question_09;
        firstanswer.value        = codequiz.questions.answer_09.data[0];
        secondanswer.value       = codequiz.questions.answer_09.data[1];
        thirdanswer.value        = codequiz.questions.answer_09.data[2];
        fourthanswer.value       = codequiz.questions.answer_09.data[3];
        break;

      case 10:
        questionspot.textContent = codequiz.questions.question_10;
        firstanswer.value        = codequiz.questions.answer_10.data[0];
        secondanswer.value       = codequiz.questions.answer_10.data[1];
        thirdanswer.value        = codequiz.questions.answer_10.data[2];
        fourthanswer.value       = codequiz.questions.answer_10.data[3];
        break;
    }
  }

  function renderTime ( setSeconds, boolMinutes, setMinutes ) {
    $( "#seconds" ).text( setSeconds );

    if ( boolMinutes ){
      setMinutes--;

      if ( setMinutes < 10 )
        setMinutes = "0" + setMinutes;

      $( "#minutes" ).text( setMinutes );
    }
  }

  function sleep(ms) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  function startTimer () {
    var timer = 60;
    var currentMinute = 1; // 1 minute
    var subMinute = true;

    internal = setInterval( () => {
      timer--;
      if ( timer < 10 ){
        timer = "0" + timer;
      }

      renderTime( timer, subMinute, currentMinute );
      if (subMinute){
        currentMinute--;
        subMinute = false;
      }

      if ( parseInt ( timer ) === 0 ) {
        if ( parseInt ( currentMinute ) === 0 )
        {
          clearInterval( internal );
          sleep( 500 ).then( () => { keepScore(); } );
        }

        subMinute = true;
        timer = 60;
      }
    }, 1000)
  }

  function checkAnswer( answerId ) {
    let answerPosition = ( ( answerId === "firstbutton" ) ? 0 : ( ( answerId === "secondbutton" ) ? 1 : ( ( answerId === "thirdbutton" ) ? 2 : 3 ) ) );

    switch(pageIndex) {
      case 1:
        if ( codequiz.questions.answer_01.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 2:
        if ( codequiz.questions.answer_02.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 3:
        if ( codequiz.questions.answer_03.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 4:
        if ( codequiz.questions.answer_04.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 5:
        if ( codequiz.questions.answer_05.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 6:
        if ( codequiz.questions.answer_06.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 7:
        if ( codequiz.questions.answer_07.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 8:
        if ( codequiz.questions.answer_08.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 9:
        if ( codequiz.questions.answer_09.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;

      case 10:
        if ( codequiz.questions.answer_10.correctAnswer[ answerPosition ] )
          correctAnswers++;
        // else
          // time is subtracted from the clock (?)
        break;
    }
  }

  function keepScore () {
    window.correctAnswers = correctAnswers;
    window.location.href  = 'score.html?#';
  }

  function nextQuestion () {
    // Verifies which function to call
    if ( ++pageIndex <= 10 )
      buildQuizPage( pageIndex ); // next question
    else {
      clearInterval( internal );  
      keepScore(); // Save score and call for Score webpage
    }
  }

  function upgradeQuizCode ( inputId ) {
    // Verifies if the answer is correct or not
    checkAnswer( inputId );

    // Call next question
    nextQuestion ();
  }

  // MAIN PROCEDURES
  // ====================================================================
  buildQuizPage( 1 );
  startTimer(); 

  // ELEMENTS FUNCTIONS
  // ====================================================================
  $( "#firstbutton" ).on( "click", () => {  
    upgradeQuizCode( $( "#firstbutton" ).attr( "id" ) );
  })

  $( "#secondbutton" ).on( "click", () => { 
    upgradeQuizCode( $( "#secondbutton" ).attr( "id" ));
  })

  $( "#thirdbutton" ).on( "click", () => { 
    upgradeQuizCode( $( "#thirdbutton" ).attr( "id" ));
  })

  $( "#fourthbutton" ).on( "click", () => { 
    upgradeQuizCode( $( "#fourthbutton" ).attr( "id" ));
  })

})