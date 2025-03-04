const btn = (props) => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      Q2:
      <button id={props.styles}>{props.text}</button>
      <br />
    </div>
  );
};

export default btn;
