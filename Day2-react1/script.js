import React from "react";

const root=document.querySelector("#root");

const h1=React.createElement("h1",{},"i am from react")
ReactDOM.createRoot(root).render(h1);