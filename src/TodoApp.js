import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

const data = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Learn React Native",
    completed: false,
  },
]

const TodoApp = () => {
  const [todos, setTodos] = useState(data)

  const addTodo = (todo) => {
    const newTodos = todos.concat(todo)
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const selectTodo = (id) => {
   setTodos( todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} selectTodo={selectTodo} />
    </div>
  )
}

export default TodoApp
