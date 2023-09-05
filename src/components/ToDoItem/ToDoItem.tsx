import { useState } from "react";
import classes from "./toDoItem.module.scss";
import { toDo } from "src/models/toDo";

interface ToDoItemProps {
  todo: toDo;
  ChangeState: (toDoId: string) => void;
}

export function ToDoItem({ todo, ChangeState }: ToDoItemProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted)

  return (
    <label htmlFor={todo.title} className={classes.toDo}>
      <input
        checked={isCompleted}
        type="checkbox"
        id={todo.id}
        name={todo.title}
        onClick={() => {
          setIsCompleted(prev => !prev)
        }}
        onChange={() => {
          ChangeState(todo.id)
        }}
      />
      <span>{todo.title}</span>
    </label>
  );
}