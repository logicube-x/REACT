console.log(React);

const h1=document.createElement("h1");
h1.textContent="Hello from Real Dom";
document.body.append(h1)

const rh1=React.createElement("h1")

console.log("Real Dom",h1);
console.log("virtual Dom",rh1);
