 function getRandomIntInclusive(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var wins = 0;
var losses = 0;
var totalScore = 0;
//this is calling the function to give you a random numnber
var goal=getRandomIntInclusive(19,120);
console.log(goal);
$('#goal').html(goal);

var crystal = [];

for(var i = 0; i < 4; i++){
  var number = getRandomIntInclusive(1,12);
  crystal[i] = {
    //set a property called score and set the value to the "number" variable
    score: number
  };
  $('#crystal'+ i).attr("data-crystal", i);
}

$(".crystals").on("click", function(){
  var dataIndex = parseInt($(this).attr("data-crystal"));
  console.log(crystal[dataIndex].score);
  totalScore = totalScore + crystal[dataIndex].score;
  $("#total").html(totalScore);
  if (totalScore === goal) {
      wins++;
            $("#win-counter").html(wins);
            reset();
  }

    else if (totalScore > goal) {
    losses++;
    $("#loss-counter").html(losses)
      reset();

  }
});



function reset(){

   totalScore = 0;
    $("#total").html(totalScore);
    goal = getRandomIntInclusive(19,120);
    $("#goal").html(goal);

}