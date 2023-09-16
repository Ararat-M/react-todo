import classes from "./toDoItem.module.scss";
import { ToDo } from "models/ToDo/types/ToDo";
import {useDispatch} from "react-redux";
import {toDoActions} from "models/ToDo";


interface ToDoItemProps {
  todo: ToDo;
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
        onChange={() => {dispatch(toDoActions.changeState(todo.id))}}
      />
      <span data-testid="toDoTitle">{todo.title}</span>
    </label>
  );
}