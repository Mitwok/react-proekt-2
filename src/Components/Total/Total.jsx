const Total = (props) => {
  return (
    <h2 className="text-xl">
      {props.title}: <span className="font-semibold">{props.value}</span>
      <span className="font-semibold"> zł</span>
    </h2>
  );
};

export default Total;
