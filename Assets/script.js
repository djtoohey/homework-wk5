// gets the current hour
hour = parseInt(moment().format("HH"));

// loops through times
for (let i = 9; i < (18); i++) {
    // gets div with time i
    var div = $("div").find(`[data-time='${i}']`);

    // doesnt work
    var btn = $("button").find(`[data-time=${i}]`);
    console.log(btn);
    btn.click(function () {
        console.log(i);
    });
    // end doesnt work

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

