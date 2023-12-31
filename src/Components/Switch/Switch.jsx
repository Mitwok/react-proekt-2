const Switch = (props) => {
  return (
    <section className="flex md:hidden w-full mx-0 px-4 justify-between">
      <button
        onClick={props.onExpensesPressed}
        className={`uppercase w-1/2 p-2 rounded-t-lg border-2 border-white text-xl text-center font-semibold
          ${
            props.expenseIsActive
              ? "border-b-transparent"
              : "border-b-white text-slate-400"
          }`}
      >
        wydatki
      </button>
      <span className="border-b-2 border-white w-2"></span>
      <button
        onClick={props.onIncomesPressed}
        className={`uppercase w-1/2 p-2 rounded-t-lg border-2 border-white text-xl text-center font-semibold
        ${
          props.incomeIsActive
            ? "border-b-transparent"
            : "border-b-white text-slate-400"
        }`}
      >
        przychody
      </button>
    </section>
  );
};

export default Switch;
