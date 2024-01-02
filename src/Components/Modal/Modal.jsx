import React, { useState, useEffect } from "react";
const Modal = (props) => {
  const [inputTitle, setTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const inputId = props.id;

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    setAmount(props.amount);
  }, [props.amount]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const cancelButton = (event) => {
    event.preventDefault();
    props.onCancelButon();
  };

  const closeModal = (event) => {
    if (event.target.id === "form") {
      props.onCancelButon();
    }
  };

  const saveForm = (event) => {
    event.preventDefault();
    props.onSaveForm(inputTitle, inputAmount, inputId);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (document.activeElement === event.currentTarget.elements.newTitle) {
        event.currentTarget.elements.newAmount.focus();
      } else if (
        document.activeElement === event.currentTarget.elements.newAmount ||
        document.activeElement === event.currentTarget.elements.saveButton
      ) {
        event.currentTarget.elements.saveButton.click();
      } else if (
        document.activeElement === event.currentTarget.elements.cancelButton
      ) {
        props.onCancelButon();
      }
    } else if (event.shiftKey && event.key === "Tab") {
      if (document.activeElement === event.currentTarget.elements.newTitle) {
        event.preventDefault();
        event.currentTarget.elements.saveButton.focus();
      } else if (
        document.activeElement === event.currentTarget.elements.saveButton
      ) {
        event.preventDefault();
        event.currentTarget.elements.cancelButton.focus();
      }
    } else if (event.key === "Tab") {
      if (document.activeElement === event.currentTarget.elements.saveButton) {
        event.preventDefault();
        event.currentTarget.elements.newTitle.focus();
      }
    }
  };

  return (
    <div className="fixed z-50 bg-black bg-opacity-40 w-screen h-screen">
      <div
        id="form"
        onClick={closeModal}
        className="flex justify-center items-center w-full h-full"
      >
        <form
          onKeyDown={onKeyPress}
          onSubmit={saveForm}
          className="bg-white rounded-lg mx-2 w-96 max-w-full h-auto"
        >
          <div className="bg-slate-300 rounded-t-lg mb-4">
            <h1 className="text-2xl py-2 text-center">Edytuj</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-4/5 relative mb-4">
              <input
                autoFocus
                onChange={handleTitleChange}
                value={inputTitle}
                type="text"
                id="newTitle"
                required
                className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="newTitle"
                className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Nowa nazwa
              </label>
            </div>
            <div className="w-4/5 relative mb-4">
              <input
                onChange={handleAmountChange}
                value={inputAmount}
                type="number"
                min="0.01"
                step="0.01"
                id="newAmount"
                required
                className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="newAmount"
                className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Nowa kwota
              </label>
            </div>
          </div>
          <div className="flex mx-auto justify-end w-4/5 mb-4">
            <button
              id="cancelButton"
              onClick={cancelButton}
              className="bg-slate-200 rounded-lg mr-4 px-4 py-2 duration-200 ease-in-out md:hover:border-blue-600 md:hover:text-white md:hover:bg-blue-600 focus:outline-none border-2 focus:border-blue-600"
            >
              Anuluj
            </button>
            <button
              id="saveButton"
              type="submit"
              className="bg-slate-200 rounded-lg px-4 py-2 duration-200 ease-in-out md:hover:border-blue-600 md:hover:text-white md:hover:bg-blue-600 focus:outline-none border-2 focus:border-blue-600"
            >
              Zapisz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
