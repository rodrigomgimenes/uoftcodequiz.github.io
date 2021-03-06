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

  var maxScoreInput  = document.querySelector( "#maxscore"  );
  var userScore      = document.querySelector( "#userscore" );
  var userInitials   = document.querySelector( "#initials"  );

  // FUNCTIONS
  // ====================================================================
  function createHighscoreLine () {
    if ( userInitials.value != "" ) {
      var formID = "form" + Date.now();

      // Creating new Form
      var newForm = $( "<form>" );
      $( ".container" ).append( newForm );
      newForm.attr( "action", "#" ).attr( "class", "customized-form" ).attr( "id", ( formID ) );

      // Creating new Inputs
      var firstInput = $( "<input>" );
      $( "#" + formID ).append( firstInput );

      //debugger

      firstInput.attr( "id", ( "userinitials" + Date.now() ) ).attr( "type", "button" ).attr( "value", userInitials.value );
      userInitials.value = "";

      var secondInput = $( "<input>" );
      $( "#" + formID ).append( secondInput );
      secondInput.attr( "id", ( "currentscore" + Date.now() ) ).attr( "type", "text" ).attr( "readonly", "" ).attr( "placeholder", "Current Score: " + userScore.textContent ).attr( "style", "color: #252428;");
    }
  }

  // MAIN PROCEDURES
  // ====================================================================
   console.log ( "finalscore: ", localStorage.getItem("finalscore") );

  maxScoreInput.textContent = MAXQUESTIONS;
  userScore.textContent     = parseInt( localStorage.getItem("finalscore") ) < 10 ? "0" + localStorage.getItem("finalscore") : localStorage.getItem("finalscore");

  // ELEMENTS FUNCTIONS
  // ====================================================================
  $( "#savebutton" ).on( "click", () => {  
    createHighscoreLine();
  })
})