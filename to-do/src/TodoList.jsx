import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let updateTodo = (id) => {
    const updateTask = prompt("Enter new task:");
    if (updateTask) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, task: updateTask } : todo
        )
      );
    }
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => updateTodo(todo.id)}>Update</button>
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <button onClick={markAllDone}>Mark all as done</button>
    </div>
  );
}

export default ToDoList;
