console.log(window); /*This is the real dom*/

console.log(React); /*This is the virtul dom*/

let h1 = document.createElement("h1");
h1.textContent = "Hello from Real Dom";

document.body.append(h1); /*we can append h1 in dom like this  */

let rh1 = React.createElement(
  "h1",
  { class: "box" },
  React.createElement("span", { class: "imspan" }, "im under h1"),
);

// document.body.append(rh1) /*This cannot be done (This is react not dom)*/

console.log("Real dom >>>", h1);
console.log("Virtual dom >>>", rh1);

let domElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(domElem);

rootOfReact.render(rh1);

import React from "react";
import { a, sum } from "./main.js";
let result = sum(2, 3);
console.log(result);
console.log(a);

/*One more time creating an elem by react */

// for the below code to run , you need to comment the above code

// let RdomE = document.querySelector("#root");
// let div = React.createElement("div", {}, "im div");

// ReactDOM.createRoot(RdomE).render(div);