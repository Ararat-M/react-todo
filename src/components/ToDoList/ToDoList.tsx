import { ToDoItem } from "./ToDoItem";
import classes from "./toDoList.module.scss";
import { type ToDoSchema } from "./model";
import { AnimatePresence, motion } from "framer-motion";

interface ToDoListProps {
  currentList: string;
  list: ToDoSchema[];
}

function CreateAnimateItem(item: ToDoSchema) {
  return (
    <motion.li
      data-testid="toDoItem"
      key={item.id}
      className={classes["todo-item"]}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
    >
      <ToDoItem todo={item}/>
    </motion.li>
  );
}

export function ToDoList({ currentList, list }: ToDoListProps) {
  return (
    <ul data-testid="list" className={classes.list}>
      <AnimatePresence>
        {list.map((item) => {
          if (currentList === "all") {
            return CreateAnimateItem(item);
          }

          if (currentList === "active" && !item.isCompleted) {
            return CreateAnimateItem(item);
          }

          if (currentList === "completed" && item.isCompleted) {
            return CreateAnimateItem(item);
          }
        })}
      </AnimatePresence>
    </ul>
  );
}