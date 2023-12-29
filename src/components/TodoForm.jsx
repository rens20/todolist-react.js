import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => { // Fix the prop name to addTodo
  const [text, setText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text); // Use the correct prop name
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ color: 'black' }}
      placeholder="Add new Todo"
      className="py-2 px-4 border border-pink-500 rounded-md mr-2 focus:outline-none focus:border-pink-500"
    />
    <button
      type="submit"
      className="btn btn-secondary "
    >
      Add Todo
    </button>
  </form>
  );
};
TodoForm.propTypes ={
    addTodo:PropTypes.func.isRequired,
};

export default TodoForm;