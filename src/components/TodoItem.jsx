//import React from "react";
import PropTypes from 'prop-types';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
  
    <li key={todo.id} className="border p-5 border-pink-500 rounded flex flex-col md:flex-row justify-center items-center">
    <div className="flex items-center">
      <input
        type="checkbox"
        name="radio"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="checkbox checkbox-secondary mr-1"
      />
      <span>{todo.text}</span>
    </div>
    <button
      onClick={() => removeTodo(todo.id)}
      className="btn btn-secondary mt-1 md:mt-0 md:ml-2 px-1 py-1 text-sm"
    >
      Remove
    </button>
  </li>
  
 
  );
};

// Add PropTypes validation for TodoItem
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
