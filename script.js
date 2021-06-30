// When planner is opened, current day is displayed at the top

// Using Moment, current day is placed in the jumbotron
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

// Need timeblocks for each hour of the working day (9-5pm) that change color depending on the current time of day (using moment and JS)
    // If hour is behind current time (less than) background color is grey
    // If hour is equal to current time background is red
    // If hour has not yet been reached (more than) background color is green
    // For loop with if else statements to change attributes


// Clicking a timeblock allows text entry (event listeners and updating text content)




// Save button located on right side of text area to save each timeblocks events to local storage
    // Clicking the save button saves that block to local storage
    // setItem (saving) and getItem (retrieval upon page reload)
