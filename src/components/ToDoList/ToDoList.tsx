import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";
import { toDo } from "src/models/toDo";

export function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<toDo[]>([]);

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToDoList([...toDoList, {id : inputValue, title: inputValue, isCompleted: false}]);
    setInputValue("");
  }

  function ChangeState(toDoId: string) {
    setToDoList(toDoList.map((item) => {
      if (toDoId === item.id) item.isCompleted = !item.isCompleted;
      return item
    }))
  }

  return (
    <div className={classes.container}>
      <h1 className={classes["list-title"]}>todos</h1>
      <div className={classes["todo-list-container"]}>
        <form className={classes.form} onSubmit={formHandler}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </form>
        <ul className={classes.list}>
          {toDoList.map((item) => 
            <li className={classes["todo-item"]}><ToDoItem todo={item} ChangeState={ChangeState}/></li>
          )}
        </ul>
        <div className={classes["btns-panel"]}>
          {toDoList.filter((item) => item.isCompleted === false).length} active
          <div className={classes["btns-panel_main"]}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear completed</button>
        </div>
      </div>
    </div>
  );
}