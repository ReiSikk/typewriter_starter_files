"use strict";

let initStr;
let i = 0;
let newStr;
let curChr;

document.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("init");
  initStr = document.querySelector("#typewriter").textContent;
  newStr = document.createElement("h1");
  newStr.textContent = "";
  newStr.classList.add("typewritten");
  document.querySelector("body").appendChild(newStr);
  loopyLoop();
}

function loopyLoop() {
  //find the character
  let curChr = initStr[i];
  console.log(curChr);

  // append the character to the main string
  newStr.textContent = newStr.textContent + curChr;

  //iterator ++
  i++;

  if (i < initStr.length) {
    setTimeout(loopyLoop, 250);
    //possibly add math random thing to get a more random typing animation
  } else if (i < initStr.length) {
    setTimeout(loopyLoop, 90);
  } else {
    i = 0;
    setTimeout(() => {
      newStr.textContent = "";
      loopyLoop();
    });
  }
}
