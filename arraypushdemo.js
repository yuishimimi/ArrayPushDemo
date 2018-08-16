var firstName = [];  //Start with empty array
var lastName = [];  //start with empty array

var userFirst = prompt("What's your first name");
firstName.push(userFirst);  //Pushes to the end of the array
var userLast = prompt("what's your last name");
lastName.push(userLast);
window.alert(firstName[0] + lastName[0] + firstName.length + lastName.length);
