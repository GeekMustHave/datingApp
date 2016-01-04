// Different Object that can be accessed
// console - displaying info to the console
// window - top level stuff
// document - aka DOM

// Events - Things that are triggered as the user does
//          sactions  on the page, we listen for them


// Alternative method of event listerner
// document.getElementById('searchButton').addEventListener("click", searchIt,false);


// The event here is 'load', when the entire page is loaded
// window.addEventListener('load', function() {
//     console.log('the page has been loaded!');
    //document.getElementById('searchButton').addEventListener("click", searchIt,false);
// });

// Listen for the "click" event
//   This is just a verification it's working
function searchIt(){
  console.log("I'm searching already!");
}

function hoverIt() {
  console.log("Someone is over me");
}
//    Get the Button
var btnSearch = document.getElementById('searchButton');
//    Listen to the button, when it's clicked,
//  run the searchIt function
//
// Having some issues with this working..  ss
btnSearch.addEventListener('click', searchIt);
btnSearch.addEventListener('mouseover', hoverIt);





// Notice in Console that this is NOT the last log message
// The window event Listener at the top generartaes the
// Last message
console.log("pooooop");
