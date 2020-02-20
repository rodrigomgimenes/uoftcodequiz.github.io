/*
=====================================================================
*   RMG v1.0 Password Generator Javascript
*   02-19-2020
=====================================================================
*/
$( document ).ready( function() {
  // VARIABLES
  // ====================================================================
  const MAXQUESTIONS = 10;
  var maxScoreInput  = document.querySelector( "#maxscore" );
  var userScore      = document.querySelector( "#userscore" );

  // MAIN PROCEDURES
  // ====================================================================
  console.log ( "window.correctAnswers: ", window.correctAnswers );

  maxScoreInput.textContent = MAXQUESTIONS;
  userScore.textContent     = window.correctAnswers;
})