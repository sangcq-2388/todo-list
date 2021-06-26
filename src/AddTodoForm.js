import { useState } from "react"

const AddTodoForm = (props) => {
  const { addTodo } = props
  const [text, setText] = useState("")

  const handleInputChange = (event) => {
    setText(event.target.value)
  }
  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    addTodo(todo)
    setText("")
  }
  return (
    <div>
      <input value={text} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodoForm
