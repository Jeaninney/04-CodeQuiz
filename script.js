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
  var buttona;
  var buttonb;
  var buttonc;
  var buttond;
  
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
        // Loads the first question
        LoadQuestion(0);
    })

  }  

// this loads the questions with selection buttons, 1 at a time, saves the answers, and tallies the score
  function LoadQuestion(i) {

    while (i<4) {
    var qBlock = $("#mid-block");
    // this clears the area that the questions will be posted in
    qBlock.empty();
    // This posts for the text of the question
    var currentQuestion = $("<h2>" + questions[i].q + "</h2>");
    qBlock.append(currentQuestion);

    // Generate the buttons for each of the multiple choice questions
    // $("#mid-block").text(questions[i].q);
    var newP = $("<br> <br>");
    
    qBlock.append(newP);

    var buta = $("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" id=\"btna\">" + questions[i].a + "</button>");
    qBlock.append(buta);
    qBlock.append(newP);

    var butb = $("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" id=\"btnb\">" + questions[i].b + "</button>");
    qBlock.append(butb);
    qBlock.append(newP);

    var butc = $("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" id=\"btnc\">" + questions[i].a + "</button>");
    qBlock.append(butc);
    qBlock.append(newP);

    var butd = $("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" id=\"btnd\">" + questions[i].a + "</button>");
    qBlock.append(butd);
    qBlock.append(newP);



    $("#btna").on("click" (function (){
      ///////////////////////////////////////////////
      if (questions[i].ans != "a") {
        //reduce time
        alert("Wrong")
      }
      else {
        alert("That's right!")
      }
    }))

    $("#btnb").click(function (){
      ///////////////////////////////////////////////
      if (questions[i].ans != "b") {
        //reduce time
        alert("Wrong")
      }
      else {
        alert("That's right!")
      }
    })

    $("#btnc").click(function (){
      ///////////////////////////////////////////////
      if (questions[i].ans != "c") {
        //reduce time
        alert("Wrong")
      }
      else {
        alert("That's right!")
      }
    })

    $("#btnd").click(function (){
      ///////////////////////////////////////////////
      alert("button D Clicked")
      if (questions[i].ans != "D") {
        //reduce time
        alert("Wrong")
      }
      else {
        alert("That's right!")
      }
    })

      i++;
    }
    // for (k=0; k<4; k++){
    //   var whichButton = alpha[k];
    //   btn[k] = $("<button type=\"button\" class=\"btn btn-success\" ans=" + alpha[k] + ">" + questions.alpha[k] + "</button");
    //   // btn[k].setAttribute("type", "button");
    //   // btn[k].setAttribute("class", "btn btn-success");
    //   // btn[k].setAttribute("id", "button" + whichButton);
    //   qBlock.append(btn[k]);
    //   // btn[k].textContent = (questions[i].whichButton);
    //   // $("#mid-block").append("<p></p>");
    //   // $("#mid-block").append(btn.k);
    // }
 


  
}


initializeGame();



var i = 0





})