import css from "./Description.module.css";

function Description({ text }) {
  if (!text) return null;

  return <p className={css.description}>{text}</p>;
}

export default Description;
