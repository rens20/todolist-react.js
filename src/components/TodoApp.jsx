import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm'; 


const TodoApp = () => {

    //darkmode and ligth mode
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      useEffect(() => {
        const body = document.body;
        body.style.backgroundColor = darkMode ? '#1a202c' : '#ffffff';
        body.style.color = darkMode ? '#ffffff' : '#000000';
      }, [darkMode]);
    


  // todo for localstorage
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {

    // save the todos to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen mb-5 ${darkMode ? 'dark' : 'light'}`}>
    
    <button onClick={toggleDarkMode} className=" text-pink-500 mb-2">
      {darkMode ? ' Light Mode' : ' Dark Mode'}
    </button>

    <h1 className={`text-pink-500 mb-9 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>Todo App</h1>


    <TodoForm addTodo={addTodo} />
  <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
</div>


  );
};

export default TodoApp;
