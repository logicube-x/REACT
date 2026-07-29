console.log(React);

const h1=document.createElement("h1");
h1.textContent="Hello from Real Dom";
document.body.append(h1)

const rh1=React.createElement("h1",
    {class:"box"},
    React.createElement("span",
        null,
        "i am span -React(under h1)"
    ))

    // document.body.append(rh1); Not applicable it shows [Object][Object] in web page , reason: i cannot understand parse

    const RdomElem=document.querySelector("#root");

    const div=React.createElement("div",null,React.createElement("h1",null,React.createElement("span",null,"i am span from react")))

    ReactDOM.createRoot(RdomElem).render(div)

const realDOMelem=document.querySelector("#root");
const rootOfReact=ReactDOM.createRoot(realDOMelem);
rootOfReact.render(rh1);

// i had used #root twice just for understanding ..it should be called only once

console.log("Real Dom",h1);
console.log("virtual Dom",rh1);


