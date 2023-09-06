import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import classes from "./toDoList.module.scss";
import { toDo } from "../../models/toDo";
import { Button, ButtonTheme } from "../../shared/ui/Button/Button";

export function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<toDo[]>([]);
  const [currentList, setcurrentList] = useState("all");

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
          {toDoList.map((item) => {
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
        <div className={classes["btns-panel"]}>
          {toDoList.filter((item) => item.isCompleted === false).length} active
          <div className={classes["btns-panel_main"]}>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "all"}
              onClick={() => setcurrentList("all")}
            >
              All
            </Button>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "active"}
              onClick={() => setcurrentList("active")}
            > 
              Active
            </Button>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "completed"}
              onClick={() => setcurrentList("completed")}
            >
              Completed
            </Button>
          </div>
          <Button theme={ButtonTheme.CLEAR}>Clear completed</Button>
        </div>
      </div>
    </div>
  );
}