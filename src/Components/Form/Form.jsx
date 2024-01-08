const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.currentTarget.elements.title.value;
    const amount = parseFloat(
      event.currentTarget.elements.amount.value
    ).toFixed(2);

    event.currentTarget.reset();
    event.currentTarget.elements.title.focus();
    props.onAddNewPosition(title, amount);
  };

  return (
    <>
      <h2 className="uppercase p-2 hidden md:block rounded-t-lg bg-white text-xl text-center font-semibold mb-4">
        {props.label}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between mb-2"
      >
        <div className="relative w-2/3 mr-2">
          <input
            id={"new-item-" + props.label}
            name="title"
            type="text"
            required
            className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={"new-item-" + props.label}
            className="absolute md:text-base text-lg text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {props.titlePlaceholder}
          </label>
        </div>
        <div className="relative w-1/4 mr-2">
          <input
            id={"new-item-value-" + props.label}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            required
            className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={"new-item-value-" + props.label}
            className="absolute text-lg md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {props.valuePlaceholder}
          </label>
        </div>
        <button
          type="submit"
          title="Dodaj"
          className="p-2 bg-white rounded-full md:hover:bg-blue-500 md:active:bg-blue-600 md:hover:text-white ease-in-out duration-200 border-2 outline-none focus:border-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-10 h-10 md:w-9 md:h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
        </button>
      </form>
      <div className="border-b-4 border-white mb-4"></div>
    </>
  );
};

export default Form;
