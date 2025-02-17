import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [inputValue, setInputValue] = useState(""); // State to store the input value

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]); // Add the new todo to the list
      setInputValue(""); // Clear the input field
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_,i) => i !== index); // Filter out the todo at the given index
    setTodos(newTodos); // Update the todos state
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
