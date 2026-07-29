import React from 'react'

function App() {

  let count=10;
  console.log(count);
  
  // const btn=document.querySelector("button");


  return (
    <div>
      <h1>Count is{count}</h1>
      
      <button onClick={function(){
       count++;
      }}>Increment</button>
    </div>
  )
}

export default App;