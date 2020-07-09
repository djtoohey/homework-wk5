# homework-wk5
Submission for the Homework for Week 5 (Work Day Scheduler)

Making html:
```
    made all the HTML based off of the example gif
    each hour has its own row, with 3 divs (hour, note and save-btn-div)
    note has a textarea with an id of hour-text
    save-btn-div has a button with the class of saveBtn and id of hour-btn
```

Textarea background color:
```
    find the current time using moment.js
    set the color of the textarea to grey if the time is in the past
    set the color of the textarea to red if the time is current
    set the color of the textarea to green if the time is in the future
```

Setting the textarea from saved
```    
    find the textarea using jquery.find(attr)
    retrieve any saved text from localStorage
    set it to the corresponding textarea
```

Buttons
```
    when a button is clicked it saves the text that is in the corresponding textarea to localStorage
```

Other:
```
    modified and added to css styling
    added comments 
    made README.md
```
![work day scheduler complete](assets\finished.png)

GitHub Pages: https://djtoohey.github.io/homework-wk5/index.html