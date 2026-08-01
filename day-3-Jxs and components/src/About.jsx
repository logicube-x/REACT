import React from "react";

    let About =({width,children})=>{
    
       
    console.log(width)
    return <div>
        <h1>Hey i am About </h1>
        {children}
    </div>
}

export default About;