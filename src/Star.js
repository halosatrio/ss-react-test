const Star = ({ selected = false, onClick = (f) => f }) => {
  return (
    <span className={selected ? "active" : ""} onClick={onClick}>
      *
    </span>
  );
};

export default Star;
