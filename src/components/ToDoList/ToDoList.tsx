import { ToDoItem } from "../ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";
import { ToDo } from "../../models/ToDo";

interface ToDoListProps {
  currentList: string;
  list: ToDo[];
  setList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export function ToDoList({ currentList, list, setList }: ToDoListProps) {
  function ChangeState(toDoId: string) {
    setList(list.map((item) => {
      if (toDoId === item.id) item.isCompleted = !item.isCompleted;
      return item
    }))
  }

  return (
    <ul className={classes.list}>
      {list.map((item) => {
        if (currentList === "all") {
          return (
            <li className={classes["todo-item"]}>
              <ToDoItem todo={item} ChangeState={ChangeState}/>
            </li>
          )
        }

        if (currentList === "active" && item.isCompleted === false) {
          return (
            <li className={classes["todo-item"]}>
              <ToDoItem todo={item} ChangeState={ChangeState}/>
            </li>
          )
        }

        if (currentList === "completed" && item.isCompleted === true) {
          return (
            <li className={classes["todo-item"]}>
              <ToDoItem todo={item} ChangeState={ChangeState}/>
            </li>
          )
        }
      })}
    </ul>
  );
}