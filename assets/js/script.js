//Get Current times and store for later
var currentDate = moment().format("dddd MMM Do, YYYY");
var currentTime = moment().format("hh:mm a ");
var currentHour = moment().hour();
//Find the time and date elements
var timeEl = $("#currentTime");
var dateEL = $("#currentDay");
var timeBlockArr = $(".row.time-block").toArray();
var userInputEl = $("#text-content").toArray();

var saveButton = $("#save-button");

timeEl.html(currentTime);
dateEL.html(currentDate);
//Function to render the hour blocks based on their place in time; use past present and future (use .addClass)

function renderTimes(timeBlockArr) {
  $(".row.time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else if (blockHour > currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    //Add and remove class formats
    // $(this).addClass("past")
    // $(this).addClass("present")
    // $(this).addClass("future")
  });
}

$(".col-md-1.btn-outline-success").on("click", function () {
    event.preventDefault()
  //Look to the block where user clicked save and place values of description and time in variables.
  var userInput = $(this).prev().val();
  var userTime = $(this).parent().attr("id");
  console.log(this);
  //Place the user input and time into local storage
  localStorage.setItem(userTime, userInput);
});
   
function loadItems() {
  for (i = 8; i === 17; i++) {
    $("#" + i).sibling("#text-content").val(localStorage.getItem(i.value));
    console.log($("#" + i).sibling("#text-content").val())
  }
}

renderTimes();
loadItems()
