import { ToDoItem } from "../ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";

export function ToDoList() {
  return (
    <div className={classes.container}>
      <h1 className={classes["list-title"]}>todos</h1>
      <ul className={classes["todo-list"]}>
        <li className={classes["todo-item"]}>
          <ToDoItem title="Тестовое задание"/>
        </li>
        <li className={classes["todo-item"]}>
          <ToDoItem title="Прекрасный код"/>
        </li>
        <li className={classes["todo-item"]}>
          <ToDoItem title="Покрытие тестами"/>
        </li>
      </ul>
    </div>
  );
}