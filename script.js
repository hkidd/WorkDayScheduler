// When planner is opened, current day is displayed at the top

// Using Moment, current day is placed in the jumbotron
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

// Need timeblocks for each hour of the working day (9-5pm) that change color depending on the current time of day (using moment and JS)
    // If hour is behind current time (less than) background color is grey
    // If hour is equal to current time background is red
    // If hour has not yet been reached (more than) background color is green
    // For loop with if else statements to change attributes

    var hour = moment().format("k");
    console.log(hour);

    var timeblocks = [];
    timeblocks = document.querySelectorAll('.eventInput[data-time]');
    // console.log(timeblocks.value);

    function bckgrdColor(array) {
        for (var i = 0; i < (array.length); i++)
            if (array[i].value < hour) {
                console.log(array[i]);
                array[i].style.backgroundColor = "#d3d3d3";
                array[i].style.color = "black";
            } else if (array[i].value == hour) {
                array[i].style.backgroundColor = "#ff6961";
                array[i].style.color = "black";
                console.log(array[i]);
            } else {
                array[i].style.backgroundColor = "#77dd77";
                array[i].style.color = "black";
            console.log(array[i]);
        }
    }

bckgrdColor(timeblocks);

// Clicking a timeblock allows text entry (event listeners and updating text content)




// Save button located on right side of text area to save each timeblocks events to local storage
    // Clicking the save button saves that block to local storage
    // setItem (saving) and getItem (retrieval upon page reload)
    // Grab eventInput value and save to local storage

