import classes from "./toDoItem.module.scss";

interface ToDoItemProps {
  title: string;
}

export function ToDoItem({ title }: ToDoItemProps) {
  return (
    <label htmlFor={title} className={classes.toDo}>
      <input type="checkbox" id={title} name={title} />
      <span>{title}</span>
    </label>
  );
}