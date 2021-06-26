import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const {deleteTodo, selectTodo, todos} = props
  return (
    <ol>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} selectTodo= {selectTodo} />
      ))}
    </ol>
  )
}

export default TodoList
