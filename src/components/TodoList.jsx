import React, { useState } from 'react'

const TodoList = () => {

    let str="";

    const [todoItems, settodoItems]=useState([]);

    const addItem=()=>{
        settodoItems([...todoItems, str])
    }

  return (

    <section>

    <div>TodoList</div>
    

    {todoItems.map((item)=>(
        <li key={Math.random()}>{item}</li>
    ))}

    <input type="text" name="" id="" onChange={str} placeholder='Enter items to add'  />

    <button onClick={addItem}>Add item to todoList</button>

    </section>
  )
}

export default TodoList