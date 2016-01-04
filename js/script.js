// Different Object that can be accessed
// console - displaying info to the console
// window - top level stuff
// document - aka DOM

// Events - Things that are triggered as the user does
//          sactions  on the page, we listen for them


// Alternative method of event listerner
// document.getElementById('searchButton').addEventListener("click", searchIt,false);


// The event here is 'load', when the entire page is loaded
window.addEventListener('load', function() {
    console.log('the page has been loaded!');
});

// Listen for the "click" event
//   This function gets called when the click event is heard

var resultContainer = document.getElementById("results");
function searchIt(){
  // console.log("I'm searching already!");
  // Get the Hobby from text box
  var hobbyField = document.getElementById('hobby');
  var hobbyContent = hobbyField.value
  console.log('hobbyContent is:' + hobbyContent);
  // Get gender
  var genderField = document.getElementById('gender');
  var genderIndex = genderField.selectedIndex;
  console.log('selected index: ' + genderIndex);
  var genderValue = genderField.options[genderIndex].value;
  console.log('Actual value:' + genderValue);
}

function hoverIt() {
  console.log("Someone is over me");
}
//    Get the Button
var btnSearch = document.getElementById('searchButton');
//    Listen to the button, when it's clicked, or hovered over
//  run the searchIt or hoverIt function
btnSearch.addEventListener('click', searchIt);
// btnSearch.addEventListener('mouseover', hoverIt);





// Notice in Console that this is NOT the last log message
// The window event Listener at the top generartaes the
// Last message
console.log("pooooop");
