function Icon({ id, width = 16, height = 16, className }) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/icons.svg#${id}`} />
      {/* <use href={`/icons/icons.svg#${id}`} /> */}
    </svg>
  );
}

export default Icon;
