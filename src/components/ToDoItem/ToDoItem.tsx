import { useState } from "react";
import classes from "./toDoItem.module.scss";
import { toDo } from "src/models/toDo";

interface ToDoItemProps {
  todo: toDo;
}

export function ToDoItem({ todo }: ToDoItemProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted)

  return (
    <label htmlFor={todo.title} className={classes.toDo}>
      <input 
        checked={isCompleted}
        type="checkbox"
        id={todo.title}
        name={todo.title}
        onClick={() => setIsCompleted((prev) => !prev)}
      />
      <span>{todo.title}</span>
    </label>
  );
}