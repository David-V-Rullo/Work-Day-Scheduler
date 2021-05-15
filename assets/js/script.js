//Get Current times and store for later
var currentDate = moment().format('dddd MMM Do, YYYY')
var currentTime = moment().format('hh:mm a ')
//Find the time and date elements
var timeEl = $("#currentTime")
var dateEL = $("#currentDay")
console.log(currentDate)
console.log(currentTime)
//Set current time and date to respective elements
dateEL.text(currentDate)
timeEl.text(currentTime)

//Create a function to render the hour blocks based on their place in time; use past present and future .addClass
function renderTimes(){
    for (i=1; i === 11; i++ ){
        if () {

        }
}
$("#1").addClass("present")
$("#2").addClass("future")

