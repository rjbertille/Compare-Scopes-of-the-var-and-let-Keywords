function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
    return "function scope";
  }
  console.log("Function scope i is: ", i);
  return i;
}
