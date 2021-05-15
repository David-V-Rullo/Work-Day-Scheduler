//Get Current times and store for later
var currentDate = moment().format('dddd MMM Do, YYYY')
var currentTime = moment().format('hh:mm a ')
var currentHour = moment().hour()
console.log(currentHour)
//Find the time and date elements
var timeEl = $("#currentTime")
var dateEL = $("#currentDay")
var timeBlockArr = $(".row.time-block").toArray()

timeEl.html(currentTime)
dateEL.html(currentDate)
//Create a function to render the hour blocks based on their place in time; use past present and future .addClass

function renderTimes(timeBlockArr){
    $(".row.time-block").each(function() {
        var blockHour = parseInt($(this).attr("id"))
        if (blockHour === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        else if (blockHour > currentHour){
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
        else {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        //Add and remove class formats
        // $(this).addClass("past")
        // $(this).addClass("present")
        // $(this).addClass("future")
    } )
}
renderTimes()
// $("#1").addClass("present")
// $("#2").addClass("future")

