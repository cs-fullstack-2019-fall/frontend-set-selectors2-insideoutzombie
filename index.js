// 1) Print the first p tag to the console using the ID, class, and tag selectors.
let printP = document.getElementById('first');
// !! : printP.innerText
console.log(printP);

let printD = document.getElementsByClassName("special");
// !! : printD[0].innerText
console.log(printD);

console.log(document.getElementsByTagName("special"));
// !! : getElememts returns an array


// 2) Print the special class using both the query selector and query all selector.

var el = document.querySelector(".special");
console.log(el);
// !! : el.innerText
let el2 = document.querySelectorAll(".special")
console.log(el2);
// !! : el2[0].innerText



// 3) Change the color of the h1 statement to blue.
document.getElementsByTagName('h1')[0].style.color = "blue"



// 4) Change the color of the last p tag to yellow.
document.getElementById('last').style.color = "yellow";
