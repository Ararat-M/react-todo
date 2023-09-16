import { useState } from "react";
import classes from "./main.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ToDoList } from "components/ToDoList";
import { nanoid } from "nanoid"
import { useDispatch, useSelector} from "react-redux";
import {getToDoList, toDoListActions} from "components/ToDoList/model";

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const [currentList, setCurrentList] = useState("all");
  const toDoList = useSelector(getToDoList);
  const dispatch = useDispatch();

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(toDoListActions.addToDo({id: nanoid(), isCompleted: false, title: inputValue}))
    setInputValue("");
  }

  function clearCompleted() {
    dispatch(toDoListActions.clearCompleted());
    if (currentList === "completed") setCurrentList("all");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes["title"]}>todos</h1>
      <div className={classes["card"]}>
        <form data-testid="form" className={classes.form} onSubmit={formHandler}>
          <input data-testid="input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </form>

        <div>
          <ToDoList currentList={currentList} list={toDoList}/>
        </div>

        <div className={classes["btns-panel"]}>
          <span data-testid="activeCounter">
            {toDoList.filter((item) => !item.isCompleted).length} active
          </span>

          <div className={classes["btns-panel_main"]}>
            <Button
              data-testid="btnAll"
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "all"}
              onClick={() => setCurrentList("all")}
            >
              All
            </Button>
            <Button
              data-testid="btnActive"
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "active"}
              onClick={() => setCurrentList("active")}
            >
              Active
            </Button>
            <Button
              data-testid="btnCompleted"
              theme={ButtonTheme.CLEAR}
              isActive={currentList === "completed"}
              onClick={() => setCurrentList("completed")}
            >
              Completed
            </Button>
          </div>

          <Button
            data-testid="btnClear"
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