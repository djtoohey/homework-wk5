$(document).ready(function () {
    // gets the current hour
    hour = parseInt(moment().format("HH"));

    // loops through times
    for (let i = 9; i < (18); i++) {
        // gets div with time i
        var div = $("div").find(`[data-time="${i}"]`);




        // finds btn with id of i
        var btn = $(`button#${i}-btn`);

        // btn click
        btn.click(function () {
            // finds text area
            var textArea = $("textarea#" + i + "-text");
            // logs the text in text area
            console.log(textArea.val());



        });

        // sets time in the past
        if (i < hour) {
            div.addClass("past");
            // console.log("past");
        }
        // sets time in the future
        else if (i > hour) {
            div.addClass("future");
            // console.log("future");
        }
        // sets time in the present
        else {
            div.addClass("present");
            // console.log("present");
        }
    }

});