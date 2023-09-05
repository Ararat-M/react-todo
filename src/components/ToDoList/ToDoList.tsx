import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";
import { toDo } from "src/models/toDo";

export function ToDoList() {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState<toDo[]>([]);

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToDoList([...toDoList, {title: value, isCompleted: false}]);
    setValue("");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes["list-title"]}>todos</h1>
      <ul className={classes["todo-list"]}>
        <form onSubmit={formHandler}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </form>
        {toDoList.map((item) => <ToDoItem todo={item} />)}
      </ul>
    </div>
  );
}