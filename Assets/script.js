// waits for page to load
$(document).ready(function () {
    // gets current date
    date = moment().format("dddd, MMMM Do");

    // gets the current hour
    hour = parseInt(moment().format("HH"));
    // hour = 12;

    // gets id of currentDay
    currentDayTxt = $("#currentDay");
    // sets to date
    currentDayTxt.text(date);

    // loops through times
    for (let i = 9; i < (18); i++) {
        // gets div with time i
        var div = $("div").find(`[data-time="${i}"]`);

        // gets text out of local storage
        var savedText = localStorage.getItem(i);
        // sets textarea 
        var textArea = $("textarea#" + i + "-text");
        // sets textarea's text to saved text
        textArea.val(savedText);

        // console.log(savedText);


        // finds btn with id of i
        var btn = $(`button#${i}-btn`);

        // btn click
        btn.click(function () {
            // finds text area (Needs to happen again??? think scope is why)
            var textArea = $("textarea#" + i + "-text");

            // logs the text in text area
            // console.log(textArea.val());

            // saves the text from textarea to localstorage at point i
            localStorage.setItem(i, textArea.val());


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