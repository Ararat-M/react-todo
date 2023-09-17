import classes from "./checkbox.module.scss";
import { motion } from "framer-motion";
import { type InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label htmlFor={props.id} className={classes.toDo}>
      <input
        data-testid="checkbox"
        checked={props.checked}
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
      <motion.span
        data-testid="toDoLabel"
        animate={{
          x: props.checked ? -2 : 0,
          opacity: props.checked ? 0.5 : 1,
          textDecorationLine: props.checked ? "line-through" : "none"
        }}
      >
        {label}
      </motion.span>
    </label>
  );
}