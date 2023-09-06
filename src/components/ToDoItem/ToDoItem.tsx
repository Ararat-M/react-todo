import classes from "./toDoItem.module.scss";
import { ToDo } from "../../models/ToDo";


interface ToDoItemProps {
  todo: ToDo;
  ChangeState: (toDoId: string) => void;
}

export function ToDoItem({ todo, ChangeState }: ToDoItemProps) {
  return (
    <label htmlFor={todo.id} className={classes.toDo}>
      <input
        checked={todo.isCompleted}
        type="checkbox"
        id={todo.id}
        name={todo.title}
        onChange={() => {
          ChangeState(todo.id)
        }}
      />
      <span>{todo.title}</span>
    </label>
  );
}