import { useState, useEffect } from 'react';
import Todos from './components/Todos';
import './App.css';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(storedTodos);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
        <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
        // Filtro para determinada tarefa
          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted
          )
          // FIltro do Search
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          // Parâmetro para ordem alfabética
          .sort((a, b) =>
            sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          // Mapear o resultado dos outros filtros
          .map((todo) => (
            <Todos
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              todo={todo}
              key={todo.id}
              isCompleted={todo.isCompleted}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
