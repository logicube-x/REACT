import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const App=()=>{

let [count,setCount]=useState(0)

    return(
        <div>
            <h2>Count is -{count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
        </div>
    )
}

export default App;