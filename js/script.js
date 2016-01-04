// Different Object that can be accessed
// console - displaying info to the console
// window - top level stuff
// document - aka DOM

// Events - Things that are triggered as the user does
//          sactions  on the page, we listen for them


// a JSON object embedded in JS, not really how it should be done

var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

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
  // Repopulate the results area, we are passing
  // the gender from the search click
  fillResults(genderValue, hobbyContent);
}

// Got though users JSON and build HTML
function fillResults(genderIs, hobbyIs){
var resultsHTML = '';
for (var i = 0; i < users.length; i++) {
  // filter to match gender dropdown
  if (genderIs == 'A' || genderIs == users[i].gender) {
    // filter for hobby
    if (hobbyIs == '' || hobbyIs == users[i].hobby) {
      resultsHTML += '<div class="person-row">\
        <img src="images/' + users[i].avatar + '" alt="" />\
        <div class="person-info">\
          <div class="">' + users[i].name + '</div>\
          <div class="">' + users[i].hobby + '</div>\
          <button type="button" name="button">Add as friend</button>\
        </div>\
      </div>'

      resultContainer.innerHTML = resultsHTML;
    };  // end of if for hobby
  };  // end of if gender
};  // end of for
} // end of function

// Now call the function to populate the results initially
// The default for the drill down is All (A)
fillResults('A', '');

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
