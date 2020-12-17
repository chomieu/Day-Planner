// Runs the function when the page has loaded
$(document).ready(function () {
    var today = moment().format("dddd, MMMM Do")
    var time = parseInt(moment().format("H"))
    const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    
    $("#currentDay").text(today)
    
    for (i = 0; i < hours.length; i++) {
        $(".container").append($("<tr>", { class: "row time-block", id: i }))
        $("#" + i).append($("<th>", { class: "col-1 pt-3 text-right hour", text: hours[i] }))
        $("#" + i).append($("<textarea>", { class: "col-10 description", text: localStorage.getItem(i) }))
        $("#" + i).append($("<button>", { class: "col-1 saveBtn fa fa-save" }))

        if (time < i+9) {
            $("#" + i).addClass("future")
        } else if (time === i+9) {
            $("#" + i).addClass("present")
        } else {
            $("#" + i).addClass("past")
        }
    }

    $("button").on("click", function(event) {
        event.preventDefault()
        var saveID = $(this).parent().attr("id")
        var task = $("#" + saveID).children()[1].value
        localStorage.setItem(saveID, task)
    })
})