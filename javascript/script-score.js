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
    // Creating new Form
    var newForm = $( "<form>" );
    $( ".container" ).append( newForm );
    newForm.attr( "action", "#" ).attr( "class", "customized-form" );

// there's going to have a loop here!!
    // Creating new Inputs
    var newInput01 = $( "<input>" );
    $( ".customized-form" ).append( newInput01 );
    // console.log ("userinitial", userInitials.value);
    newInput01.attr( "id", "userinitials" ).attr( "type", "button" ).attr( "value", "rmg" );//userInitials.textContent );


    var newInput02 = $( "<input>" );
    $( ".customized-form" ).append( newInput02 );
    newInput02.attr( "id", "currentscore" ).attr( "type", "text" ).attr( "readonly", "" ).attr( "placeholder", "Current Score: " + userScore.textContent );

/*
// Creating Paragraphs and A Tags
  var newP = [ "" ]; 
  var newA = [ "" ];
  var elementColor = "";
  activity.elementId.forEach( ( element, index ) => {
    newP[ index ] = $( "<p>" ); 
    newA[ index ] = $( "<a>" );

    $( "#activitybutton" ).append( newP[ index ] );
    newP[ index ].append( newA[ index ] );

    //Get the color of the button (Rest of division by 4)
    elementColor = ( ( index % 4 === 0 ) ? "buttongreen" : ( ( index % 4 === 1 ) ? "buttonred" : ( ( index % 4 === 2 ) ? "buttonyellow" : "buttonblue" ) ) );
    //Get the color of the button randomly
    // elementColor = activity.buttoncolor [ Math.floor( Math.random() * (activity.buttoncolor.length) ) ];

    // Check if First element
    newA[ index ].attr( "href", ( ( index === 0 ) ? "index-timer.html" : "#" ) ).attr( "id", element ).attr( "class", ( ( index === activity.elementId.length-1 ) ? "button " + elementColor + " last" : "button " + elementColor ) );
    newA[ index ].append( "<strong>" + activity.elementText[ index ] + "</strong>" );
  });
*/

  }

  // MAIN PROCEDURES
  // ====================================================================
  console.log ( "window.correctAnswers: ", window.correctAnswers );

  maxScoreInput.textContent = MAXQUESTIONS;
  //userScore.textContent     = window.correctAnswers;

  // ELEMENTS FUNCTIONS
  // ====================================================================
  $( "#savebutton" ).on( "click", () => {  
    createHighscoreLine();
  })
})