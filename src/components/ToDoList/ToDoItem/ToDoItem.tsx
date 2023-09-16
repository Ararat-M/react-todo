import { ToDoSchema } from "../model/types/ToDoSchema";
import { useDispatch } from "react-redux";
import { toDoListActions } from "../model";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";


interface ToDoItemProps {
  todo: ToDoSchema;
}

export function ToDoItem({ todo }: ToDoItemProps) {
  const dispatch = useDispatch();

  return (
    <Checkbox
      id={todo.id}
      name={todo.title}
      checked={todo.isCompleted}
      label={todo.title}
      onChange={() => dispatch(toDoListActions.changeState(todo.id))}
    />
  );
}