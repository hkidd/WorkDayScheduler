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

    // var hour = 12;

    var timeblocks = [];
    timeblocks = document.querySelectorAll('.eventInput[data-time]');
    
    var length = timeblocks.length;

    // QuerySelectorAll does not return an array because its a browser method.  Must be converted!
    var timeArray = Array.from(timeblocks);
    console.log(timeArray);

    function bckgrdColor(array) {

        for (let i = 0; i < length; i++)
            if (parseInt(array[i].dataset.time) < hour) 
            {
                console.log(array[i].dataset.time);
                array[i].style.backgroundColor = "#d3d3d3";
                array[i].style.color = "black";
            } 
            else if (parseInt(array[i].dataset.time) == hour) 
            {
                array[i].style.backgroundColor = "#ff6961";
                array[i].style.color = "black";
                console.log(array[i].dataset.time);
            } 
            else 
            {
                array[i].style.backgroundColor = "#77dd77";
                array[i].style.color = "black";
                console.log(array[i].dataset.time);
            }
    }

bckgrdColor(timeArray);

// Clicking a timeblock allows text entry (event listeners and updating text content)
    // Using bootstrap input forms


// Save button located on right side of text area to save each timeblocks events to local storage
    // Clicking the save button saves that block to local storage
    // setItem (saving) and getItem (retrieval upon page reload)
    // Grab eventInput value and save to local storage

