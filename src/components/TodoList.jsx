import React, { useState } from 'react'

const TodoList = () => {


    const [todoItems, settodoItems]=useState([]);
    const [inputValue, setInputValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(inputValue.trim()){
          settodoItems([...todoItems,inputValue]);

          setInputValue("");
        }
    };

    const handleChange=(e)=>{
      setInputValue(e.target.value)
    }

  return (

    <section>

    <div>TodoList</div>
    
    <form onSubmit={handleSubmit}>
    
      <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new todo' name="" id="" />

      <button type='submit'>Add item to todoList</button>
    </form>

    <ul>
      {todoItems.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </ul>


    </section>
  )
}

export default TodoList