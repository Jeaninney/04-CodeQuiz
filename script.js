$(document).ready(function() {

// The array of questions for our code quiz.
var questions = [
    { q: "What is the correct way to write a JavaScript array?", 
      a: "var colors = [\"red\", \"green\", \"blue\"]",
      b: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
      c: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
      d: "var colors = \"red\", \"green\", \"blue\"",
      ans: "a" 
      },
    { q: "Which event occurs when the user clicks on an HTML element?", 
      a: "onmouseover",
      b: "onchange",
      c: "onclick",
      d: "onmouseclick",
      ans: "c"
      },
    { q: "How do you round the number 7.25, to the nearest integer?", 
      a: "round(7.25)",
      b: "rnd(7.25)",
      c: "Math.rnd(7.25)",
      d: "Math.round(7.25)",
      ans: "d" 
      },
    { q: "Inside which HTML element do we put the JavaScript?", 
      a: "<javascript>",
      b: "<script>",
      c: "<js>",
      d: "<scripting>",
      ans: "b" 
      },
    { q: "How do you write \"Hello World\" in an alert box?", 
      a: "alertBox(\"Hello World\");",
      b: "msgBox(\"Hello World\");",
      c: "msg(\"Hello World\");",
      d: "alert(\"Hello World\");",
      ans: "d" 
      }
  ];

// Set variables global to the runtime of the application
  var currentQuestion = "";
  var buttonA;
  var buttonB;
  var buttonC;
  var buttonD;
  
// We start the game with a score of 0.
  var score = 0;


// this function brings up the introductory page of the game.
  function initializeGame() {
    str = "<h1>Welcome to the Javascript code quiz</h1>";
    html = $.parseHTML( str );

    // this adds the headline
    $("#mid-block").html(str);
    // this adds a little space between the headline and the button
    $("#mid-block").append("<p></p>");
    //this adds the button
    $("#mid-block").append("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" id=\"start\">Test your knowledge now!</button>");

    // this is what triggers the game to start when the button is clicked
    $("#start").click(function (){
        alert("the game is started.")
    })

}  
initializeGame();





})