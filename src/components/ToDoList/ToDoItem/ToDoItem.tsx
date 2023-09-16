import classes from "./toDoItem.module.scss";
import { ToDoSchema } from "../model/types/ToDoSchema";
import { useDispatch } from "react-redux";
import { toDoListActions } from "../model";
import { motion } from "framer-motion";


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
        <motion.label
            animate={{
                x: todo.isCompleted ? -2 : 0,
                opacity: todo.isCompleted ? 0.5 : 1,
                textDecorationLine: todo.isCompleted ? "line-through" : "none",
            }}
        >
            <span data-testid="toDoTitle">{todo.title}</span>
        </motion.label>
    </label>
  );
}