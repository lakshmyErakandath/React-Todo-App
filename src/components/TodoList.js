import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';


const TodoList = ({ todos }) => {
  console.log({ todos });
  return (
    <div>
      {todos.map(todo => (
        <div className="listItemContainer">
          <div className="listItem">
            <div>{todo.text}</div>
            <div>
            <AiOutlineCheck className="completed" />
            <BiTrashAlt className="trash" />
            </div>
          </div>
         </div>
  ))}
  </div>
  )
}


export default TodoList;