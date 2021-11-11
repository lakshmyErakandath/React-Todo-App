import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';


const TodoList = () => {
  return (
    <div className = "listItemContainer">
      <div className = "listItem">
      <AiOutlineCheck className = "completed"/>
      <BiTrashAlt className = "trash" />
      </div>
    </div>
  )
}

export default TodoList;