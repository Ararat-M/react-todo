import classes from "./input.module.scss";
import { type InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  isError?: boolean;
  label?: string;
  testId?: string;
}

export function Input({
  isError = false,
  label = "",
  onChange,
  testId,
  ...props
}: InputProps) {
  const mods = {
    [classes.error]: isError
  };

  return (
    <input className={classNames(classes.input, [], mods)}
      data-testid={testId}
      type={props?.type}
      id={label}
      value={props?.value}
      name={props?.name}
      placeholder={props?.placeholder}
      onChange={onChange}
      disabled={props?.disabled}
    />
  );
}