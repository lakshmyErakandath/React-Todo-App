import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineDownSquare } from 'react-icons/ai';





const Form = () => {
  return (

    <form>
      <input type = "text"></input>
      <button>
      <AiOutlinePlusSquare/>
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