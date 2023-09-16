import { ToDoItem } from "./ToDoItem";
import classes from "./toDoList.module.scss";
import { ToDoSchema } from "./model";

interface ToDoListProps {
  currentList: string;
  list: ToDoSchema[];
}

export function ToDoList({ currentList, list }: ToDoListProps) {
  return (
    <ul data-testid="list" className={classes.list}>
      {list.map((item) => {
        if (currentList === "all") {
          return (
            <li data-testid="toDoItem" key={item.id} className={classes["todo-item"]}>
              <ToDoItem todo={item}/>
            </li>
          )
        }

        if (currentList === "active" && !item.isCompleted) {
          return (
            <li data-testid="toDoItem" key={item.id} className={classes["todo-item"]}>
              <ToDoItem todo={item}/>
            </li>
          )
        }

        if (currentList === "completed" && item.isCompleted) {
          return (
            <li data-testid="toDoItem" key={item.id} className={classes["todo-item"]}>
              <ToDoItem todo={item}/>
            </li>
          )
        }
      })}
    </ul>
  );
}