import React from "react";
import css from "./Button.module.css";

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${css.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
