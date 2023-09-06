import { useState } from "react";
import classes from "./main.module.scss";
import { Button, ButtonTheme } from "../../shared/ui/Button/Button";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDo } from "../../models/ToDo";

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [currentList, setCurrentList] = useState("all");

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo({id : inputValue, title: inputValue, isCompleted: false})
    setInputValue("");
  }

  function addToDo(toDo: ToDo) {
    setToDoList([...toDoList, toDo]);
  }

  function clearCompleted() {
    setToDoList(toDoList.filter((item) => !item.isCompleted));
    if (currentList === "completed") setCurrentList("all");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes["title"]}>todos</h1>
      <div className={classes["card"]}>
        <form className={classes.form} onSubmit={formHandler}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </form>

        <div>
          <ToDoList currentList={currentList} list={toDoList} setList={setToDoList}/>
        </div>

        <div className={classes["btns-panel"]}>
          <span>
            {toDoList.filter((item) => item.isCompleted === false).length} active
          </span>

          <div className={classes["btns-panel_main"]}>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "all"}
              onClick={() => setCurrentList("all")}
            >
              All
            </Button>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "active"}
              onClick={() => setCurrentList("active")}
            > 
              Active
            </Button>
            <Button 
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "completed"}
              onClick={() => setCurrentList("completed")}
            >
              Completed
            </Button>
          </div>

          <Button
            theme={ButtonTheme.CLEAR}
            onClick={clearCompleted}
          >
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
}