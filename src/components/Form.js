import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineDownSquare } from 'react-icons/ai';





const Form = ({inputText, setInputText, todos, setTodos}) => {

  const handleInputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }
  console.log(inputText)

  const handleAddItems = (e) => {
    e.preventDefault();
    // setTodos({inputText})
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
  }
  console.log(todos)

  return (
    <form>
      <input type = "text" onChange = {handleInputTextHandler}></input>
      <button>
      <AiOutlinePlusSquare onClick = {handleAddItems}/>
      </button>
      <div>
      <select className = "input-dropdown">
        <option value = "All">All</option>
        <option value = "completed">completed</option>
        <option value = "uncompleted">uncompleted</option>
      </select>
      </div>
      <button>
      <AiOutlineDownSquare />
      </button>

    </form>
  )
}

export default Form;