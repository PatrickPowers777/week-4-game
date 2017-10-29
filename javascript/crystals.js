 
//Function to set the number range that you want to define in
//order to win the game.
 function getRandomIntInclusive(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var wins = 0;
var losses = 0;
var totalScore = 0;
//This is calling the function which gives you a random number, which
//will be set as the goal that you must match in order to win
var goal=getRandomIntInclusive(19,120);
console.log(goal);
//Write the random number to the #goal div
$('#goal').html(goal);

//Make a dynamic, empty array variable named crystal which can be changed according
//to the data-crystal attribute defined in the following for loop
var crystal = [];

//Make a for loop that can dynamically change the empty crystal array. You 
//will have to reuse this in the reset function to redefine the values of
//the crystal variable after a win/loss.
for(var i = 0; i < 4; i++){
  //Each crystal will have a value between 3 and 12 points
  var number = getRandomIntInclusive(3,12);
  //Here we're changing the crystal variable according to its position
  //in the for loop. We're also using it as an object which we can set properties
  //to.
  crystal[i] = {
    //Set a property called score and set the value to the "number" variable
    score: number
  };
  //Make the <img> tag's id 'crystal' change according to the position in 
  //the for loop. ex: crystal0, crystal1 etc. do the same for the 
  //data-crystal attribute, ex: data-crystal=0, data-crystal=1. Make sure
  //to use the browser's inspect page tools to view all elements and their
  //attributes.
  $('#crystal'+ i).attr("data-crystal", i);
}

//Group all the images into the <img> tag 'crystals' class and then make them
//clickable.
$(".crystals").on("click", function(){
  //Key line. Targets the data-crystal attribute and parses the string to turn it
  //into an integer. data-crystal=0 is useless here until 0 can turn from a string
  //into a number that can be used by the crystal variable and take each <img> tag's
  //data-crystal attributes and turn it into a usable array. 
  var dataIndex = parseInt($(this).attr("data-crystal"));
  console.log(crystal[dataIndex].score);
  //Recall that the crystal variable was turned into an object (crystal[i] = {}) within the for loop
  //which stored a random number: crystal.score is its reference. So crystal[dataIndex]
  //is redefining what variable i was in the for loop and replacing it with the <img>
  //tag's data-crystal attribute. totalScore is being reset to match the value of
  //each crystal's random value which is defined in crystal[dataIndex].score
  totalScore += crystal[dataIndex].score;
  //Write the new total score to the #total div
  $("#total").html(totalScore);
  //Self-explanatory. If the totalScore variable matches the random number defined
  //by the global variable 'goal', increment the wins variable by 1. Then write the 
  //wins variable to the #win-counter div and call reset function
  if (totalScore === goal) {
      wins++;
            $("#win-counter").html(wins);
            reset();
  }
//Do the same if the totalScore variable exceeds the goal variable, except increment
//to the losses variable instead and call reset function
    else if (totalScore > goal) {
    losses++;
    $("#loss-counter").html(losses)
      reset();

  }
});



function reset(){
  //Reset the player's total score
   totalScore = 0;
    $("#total").html(totalScore);
    //Reset the score the player needs to match and win the game
    goal = getRandomIntInclusive(19,120);
    $("#goal").html(goal);

    //Reset the for loop that defines the values for the crystal array. This 
    //is important. Remember that crystal = [] (empty array) on a global level, so this for loop
    // needs to be redefined or else the same values from the first
    // for loop will be run after a win/loss.
    for(var i = 0; i < 4; i++){
    var number = getRandomIntInclusive(3,12);
    crystal[i] = {
    score: number
  }
    $('#crystal'+ i).attr("data-crystal", i);
  }
}