// Runs the function when the page has loaded
$(document).ready(function () {
    // Declares date and time variables
    var today = moment().format("dddd, MMMM Do")
    var time = parseInt(moment().format("H"))
    const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    
    // Displays current date
    $("#currentDay").text(today)
    
    // Generates time-blocks with <textarea> for description of the task and a save button
    // If the task has previously been defined (or changed) and saved, shows the saved task 
    for (i = 0; i < hours.length; i++) {
        $(".container").append($("<tr>", { class: "row time-block", id: i }))
        $("#" + i).append($("<th>", { class: "col-1 pt-3 text-right hour", text: hours[i] }))
        $("#" + i).append($("<textarea>", { class: "col-10 description", text: localStorage.getItem(i) }))
        $("#" + i).append($("<button>", { class: "col-1 saveBtn fa fa-save" }))

        // Colorizes each time-block based on its time v.s. the current time by giving it a class
        if (time < i+9) {
            $("#" + i).addClass("future")
        } else if (time === i+9) {
            $("#" + i).addClass("present")
        } else {
            $("#" + i).addClass("past")
        }
    }

    // Saves the task to local storage when user clicks on the button
    $("button").on("click", function(event) {
        event.preventDefault()
        var savedID = $(this).parent().attr("id")
        var task = $(this).prev().val()
        localStorage.setItem(savedID, task)
    })
})