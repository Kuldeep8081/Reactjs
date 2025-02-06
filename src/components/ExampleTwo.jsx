import React, { useState } from 'react'


const ExampleTwo = () => {
    const [randonNumber, setRandonNumber]=useState(()=>
        
        Math.floor(Math.random()*100)
    );
    
    const generateRandom=()=>{
    
        setRandonNumber( Math.floor(Math.random()*100));
    }
    
      return (
        <div>
            <h1>ExampleTwo</h1>
            <h1>Random Number: {randonNumber}</h1>
            <button onClick={generateRandom}>Generate New Number</button>
        </div>
      )
}

export default ExampleTwo