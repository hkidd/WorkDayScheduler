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
    // A different storage item for each timeblock?

    var saveBtn1 = document.querySelector('#save1');
    var saveBtn2 = document.querySelector('#save2');
    var saveBtn3 = document.querySelector('#save3');
    var saveBtn4 = document.querySelector('#save4');
    var saveBtn5 = document.querySelector('#save5');
    var saveBtn6 = document.querySelector('#save6');
    var saveBtn7 = document.querySelector('#save7');
    var saveBtn8 = document.querySelector('#save8');
    var saveBtn9 = document.querySelector('#save9');

    saveBtn1.addEventListener("click", saveTimeblock1);
    saveBtn2.addEventListener("click", saveTimeblock2);
    saveBtn3.addEventListener("click", saveTimeblock3);
    saveBtn4.addEventListener("click", saveTimeblock4);
    saveBtn5.addEventListener("click", saveTimeblock5);
    saveBtn6.addEventListener("click", saveTimeblock6);
    saveBtn7.addEventListener("click", saveTimeblock7);
    saveBtn8.addEventListener("click", saveTimeblock8);
    saveBtn9.addEventListener("click", saveTimeblock9);

    function saveTimeblock1(event) {
        event.preventDefault();
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock1");
    }

    function saveTimeblock2(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock2");
    }

    function saveTimeblock3(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock3");
    }

    function saveTimeblock4(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock4");
    }

    function saveTimeblock5(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock5");
    }

    function saveTimeblock6(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock6");
    }

    function saveTimeblock7(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock7");
    }

    function saveTimeblock8(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock8");
    }

    function saveTimeblock9(event) {
        event.stopPropagation();
        var val = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(val);

        localStorage.setItem("eventBlock9");
    }

