import React from 'react'

const ComponentTwo = () => {
  
  const [randonNumber, setRandonNumber]=useState(()=>
  
    Math.floor(Math.random()*100)
  );
   

  return (
    <div>
        <h1>Random Number: {randonNumber}</h1>
    </div>
  )
}

export default ComponentTwo