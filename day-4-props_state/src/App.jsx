import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App=()=>{


    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App;