// Init function runs on page load and calls the renderEvents function
function init() {
    renderEvents();
}

// Using Moment, current day is placed in the jumbotron
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

// Moment is used to determine the current hour (hours 1-24)
var hour = moment().format("k");
console.log(hour);

// Each input area is grabbed by the querySelectorAll, but returns a node list
var timeblocks = [];
timeblocks = document.querySelectorAll('.eventInput[data-time]');

var length = timeblocks.length;

// QuerySelectorAll does not return an array because its a browser method.  Must be converted to an array!
var timeArray = Array.from(timeblocks);
console.log(timeArray);

// For loop with if else statements to change data attributes for timeblock background colors
function bckgrdColor(array) {

    for (let i = 0; i < length; i++)
        // If hour is behind current time (less than) background color is grey
        if (parseInt(array[i].dataset.time) < hour) 
        {
            console.log(array[i].dataset.time);
            array[i].style.backgroundColor = "#d3d3d3";
            array[i].style.color = "black";
        } 
        // If hour is equal to current time background is red
        else if (parseInt(array[i].dataset.time) == hour) 
        {
            array[i].style.backgroundColor = "#ff6961";
            array[i].style.color = "black";
            console.log(array[i].dataset.time);
        } 
        // If hour has not yet been reached (more than) background color is green
        else 
        {
            array[i].style.backgroundColor = "#77dd77";
            array[i].style.color = "black";
            console.log(array[i].dataset.time);
        }
}

// The background color function is called using the timeblock array declared above
bckgrdColor(timeArray);


// VARIABLES AND FUNCTIONS FOR SAVING AND RETRIEVAL OF EVENT DETAILS

// Save button located on right side of text area to save each timeblocks events to local storage
    // Clicking the save button saves that block to local storage
    // setItem (saving) and getItem (retrieval upon page reload)
    // Grab eventInput value and save to local storage
    // A different storage item is created for each timeblock

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
        var eventBlock1 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock1);

        localStorage.setItem("eventBlock1", JSON.stringify(eventBlock1));
    }

    function saveTimeblock2(event) {
        event.stopPropagation();
        var eventBlock2 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock2);

        localStorage.setItem("eventBlock2", JSON.stringify(eventBlock2));
    }

    function saveTimeblock3(event) {
        event.stopPropagation();
        var eventBlock3 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock3);

        localStorage.setItem("eventBlock3", JSON.stringify(eventBlock3));
    }

    function saveTimeblock4(event) {
        event.stopPropagation();
        var eventBlock4 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock4);

        localStorage.setItem("eventBlock4", JSON.stringify(eventBlock4));
    }

    function saveTimeblock5(event) {
        event.stopPropagation();
        var eventBlock5 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock5);

        localStorage.setItem("eventBlock5", JSON.stringify(eventBlock5));
    }

    function saveTimeblock6(event) {
        event.stopPropagation();
        var eventBlock6 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock6);

        localStorage.setItem("eventBlock6", JSON.stringify(eventBlock6));
    }

    function saveTimeblock7(event) {
        event.stopPropagation();
        var eventBlock7 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock7);

        localStorage.setItem("eventBlock7", JSON.stringify(eventBlock7));
    }

    function saveTimeblock8(event) {
        event.stopPropagation();
        var eventBlock8 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock8);

        localStorage.setItem("eventBlock8", JSON.stringify(eventBlock8));
    }

    function saveTimeblock9(event) {
        event.stopPropagation();
        var eventBlock9 = $(this).closest("div.input-group").find("input[name='eventValue']").val();
        console.log(eventBlock9);

        localStorage.setItem("eventBlock9", JSON.stringify(eventBlock9));
    }

var inputText1 = document.querySelector('.block1');
var inputText2 = document.querySelector('.block2');
var inputText3 = document.querySelector('.block3');
var inputText4 = document.querySelector('.block4');
var inputText5 = document.querySelector('.block5');
var inputText6 = document.querySelector('.block6');
var inputText7 = document.querySelector('.block7');
var inputText8 = document.querySelector('.block8');
var inputText9 = document.querySelector('.block9');


// This function pulls all of the stored event values and changes the text input values to these, if they exist
function renderEvents() {
    var storedEvent1 = JSON.parse(localStorage.getItem("eventBlock1"));
        inputText1.value = storedEvent1;

    var storedEvent2 = JSON.parse(localStorage.getItem("eventBlock2"));
        inputText2.value = storedEvent2;

    var storedEvent3 = JSON.parse(localStorage.getItem("eventBlock3"));
        inputText3.value = storedEvent3;

    var storedEvent4 = JSON.parse(localStorage.getItem("eventBlock4"));
        inputText4.value = storedEvent4;

    var storedEvent5 = JSON.parse(localStorage.getItem("eventBlock5"));
        inputText5.value = storedEvent5;

    var storedEvent6 = JSON.parse(localStorage.getItem("eventBlock6"));
        inputText6.value = storedEvent6;

    var storedEvent7 = JSON.parse(localStorage.getItem("eventBlock7"));
        inputText7.value = storedEvent7;

    var storedEvent8 = JSON.parse(localStorage.getItem("eventBlock8"));
        inputText8.value = storedEvent8;

    var storedEvent9 = JSON.parse(localStorage.getItem("eventBlock9"));
        inputText9.value = storedEvent9;
}

// Init function runs on page load and calls the renderEvents function
init();
