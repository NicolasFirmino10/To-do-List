import { useState } from "react"
import PropTypes from "prop-types";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setCategory("")
        setValue("")
    }

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o Título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                    />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default TodoForm