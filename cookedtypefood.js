//build an array of cooking methods
var cookingMethod = [
"slow cooked",
"barbecued",
"boiled",
"fried",
"baked",
"microwaved",
"deep fried",
"steamed"
]
//build an array of foods
var foods = [
"noodle",
"musubi",
"steak",
"pork",
"oreo",
"carrot",
"bacon",
"spaghetti",
"egg",
"ham",
"baby back ribs",
"ice cream",
"chicken",
"pizza",
"cake",
"fish",
"tomato",
"rice"
]
//concat the cooking method and the food based on a random sequence
var x = Math.floor(Math.random() * cookingMethod.length);
var x = Math.floor(Math.random() * foods.length);
window.alert(cookingMethod[x] + foods[x]);