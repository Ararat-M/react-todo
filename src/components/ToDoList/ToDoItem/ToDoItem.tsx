import classes from "./toDoItem.module.scss";
import { useDispatch } from "react-redux";
import { toDoListActions, ToDoSchema } from "../model";


interface ToDoItemProps {
  todo: ToDoSchema;
}

export function ToDoItem({ todo }: ToDoItemProps) {
  const dispatch = useDispatch();

  return (
    <label htmlFor={todo.id} className={classes.toDo}>
      <input
        data-testid="checkbox"
        checked={todo.isCompleted}
        type="checkbox"
        id={todo.id}
        name={todo.title}
        onChange={() => {dispatch(toDoListActions.changeState(todo.id))}}
      />
      <span data-testid="toDoTitle">{todo.title}</span>
    </label>
  );
}