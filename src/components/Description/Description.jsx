import css from "./Description.module.css";
import clsx from "clsx";

function Description({ text, className }) {
  if (!text) return null;

  return <p className={clsx(css.description, className)}>{text}</p>;
}

export default Description;
