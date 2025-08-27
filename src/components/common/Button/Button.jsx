import React from "react";
import css from "./Button.module.css";

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={css.button}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
