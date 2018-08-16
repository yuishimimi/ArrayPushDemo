var firstName = [];
var lastName = [];

var userFirst = prompt("What's your first name");
firstName.push(userFirst);
var userLast = prompt("what's your last name");
lastName.push(userLast);
window.alert(firstName[0] + lastName[0] + firstName.length + lastName.length);
