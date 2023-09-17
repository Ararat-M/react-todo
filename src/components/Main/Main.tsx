import { useState } from "react";
import classes from "./main.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ToDoList } from "components/ToDoList";
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux";
import { getToDoList, toDoListActions } from "components/ToDoList/model";
import { Input } from "shared/ui/Input/Input";
import { ArrowDown } from "shared/assets/icons/ArrowDown";

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const [currentList, setCurrentList] = useState("all");

  const toDoList = useSelector(getToDoList);
  const dispatch = useDispatch();

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputValue.trim();

    if (!value) return

    dispatch(toDoListActions.addToDo({id: nanoid(), isCompleted: false, title: value}))
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
          <div className={classes["form-icon"]}>
            <ArrowDown/>
          </div>
          <Input
              testId="inputForm"
              type="text"
              value={inputValue}
              placeholder={"What needs to be done?"}
              onChange={(e) => setInputValue(e.target.value)}
          />
        </form>

        <div>
          <ToDoList currentList={currentList} list={toDoList}/>
        </div>

        <div className={classes["btn-panel"]}>
          <span>
            {toDoList.filter((item) => !item.isCompleted).length} items left
          </span>

          <div className={classes["btn-panel_main"]}>
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