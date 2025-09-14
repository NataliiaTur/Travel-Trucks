export default function CustomCaption({
  displayMonth,
  goToMonth,
  nextMonth,
  previousMonth,
}) {
  return (
    <div>
      <button onClick={() => goToMonth(previousMonth)}>
        <svg viewBox="0 0 24 24">
          <path
            d="M15 18l-6-6 6-6"
            stroke="#475467"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>

      <span>
        {displayMonth.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>

      <button onClick={() => goToMonth(nextMonth)}>
        <svg viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="#475467" strokeWidth="2" fill="none" />
        </svg>
      </button>
    </div>
  );
}
