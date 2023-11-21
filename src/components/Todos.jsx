import PropTypes from 'prop-types';

const Todos = ({ todo, removeTodo, completeTodo, isCompleted }) => {
  return (
    <div>
      <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>{isCompleted ? "Desmarcar" : "Completar" }</button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

Todos.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired, 
  }).isRequired,
  isCompleted: PropTypes.bool.isRequired, 
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todos;
