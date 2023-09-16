import { ToDoItem } from "components/ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";
import { ToDo } from "models/ToDo/types/ToDo";

interface ToDoListProps {
  currentList: string;
  list: ToDo[];
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