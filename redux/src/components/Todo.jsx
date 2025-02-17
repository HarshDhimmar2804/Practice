import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
