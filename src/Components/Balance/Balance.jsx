const Balance = (props) => {
  let message;

  if (props.balance > 0) {
    message = `Możesz jeszcze wydać ${props.balance} złotych`;
  } else if (props.balance < 0) {
    message = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      props.balance
    )} złotych`;
  } else {
    message = `Bilans wynosi zero`;
  }

  return (
    <h1 className="w-full flex justify-center items-center p-4 text-2xl mb-2 h-16">
      <span className="text-center" id="total">
        {message}
      </span>
    </h1>
  );
};

export default Balance;
