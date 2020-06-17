hour = parseInt(moment().format("HH"));

for (let i = 9; i < (18); i++) {
    var div = $("div").find(`[data-time='${i}']`);
    var btn = $("button").find(`[data-time=${i}]`);
    console.log(btn);
    btn.click(function () {
        console.log(i);
    });

    if (i < hour) {
        div.addClass("past");
        // console.log("past");
    }
    else if (i > hour) {
        div.addClass("future");
        // console.log("future");
    }
    else {
        div.addClass("present");
        // console.log("present");
    }
}

