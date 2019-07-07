var name = prompt("What is your name");
var lower = name.slice(0,1);
console.log(lower)
var upperCase = lower.toUpperCase();
var rest = name.slice(1,name.length);
rest = rest.toLowerCase();
var capitalize = upperCase + rest
alert("Hello " + capitalize);
