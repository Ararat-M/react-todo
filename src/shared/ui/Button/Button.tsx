import { type ButtonHTMLAttributes, type ReactNode } from "react";
import classes from "./button.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  theme: ButtonTheme;
  isActive?: boolean;
}

export function Button({ children, theme, isActive = false, ...props }: ButtonProps) {
  const mods = {
    [classes.active]: isActive
  };

  return (
    <button
      className={classNames(classes[theme], [], mods)}
      {...props}
    >
      {children}
    </button>
  );
};
