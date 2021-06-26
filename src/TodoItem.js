const TodoItem = (props) => {
  const { todo, deleteTodo, selectTodo } = props;
  const { id, text, completed } = todo;
  const handleClick = () => {
    deleteTodo(id);
  }
  const handleSelectedTodo = () => {
    selectTodo(id)
  }
  return (
    <li>
      <span onClick={handleSelectedTodo} style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
      <button onClick={handleClick}>X</button>
    </li>
  )
}

export default TodoItem
