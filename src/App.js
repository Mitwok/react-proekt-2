import "./App.css";

const App = () => (
  <>
    <body className="bg-slate-200 flex">
      <div
        id="edit-modal"
        className="fixed z-50 bg-black bg-opacity-40 w-screen h-screen hidden"
      >
        <div
          id="edit"
          className="flex justify-center items-center w-full h-full"
        >
          <form
            id="edit-window"
            className="bg-white rounded-lg mx-2 w-96 max-w-full h-auto"
          >
            <div className="bg-slate-300 rounded-t-lg mb-4">
              <h1 className="text-2xl py-2 text-center">Edytuj</h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-4/5 relative mb-4">
                <input
                  type="text"
                  id="new-name"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-name"
                  className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Nowa nazwa
                </label>
              </div>
              <div className="w-4/5 relative mb-4">
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  id="new-value"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-value"
                  className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Nowa kwota
                </label>
              </div>
            </div>
            <div className="flex mx-auto justify-end w-4/5 mb-4">
              <button
                id="cancel-button"
                className="bg-slate-200 rounded-lg mr-4 px-4 py-2 duration-200 ease-in-out md:hover:border-blue-600 md:hover:text-white md:hover:bg-blue-600 focus:outline-none border-2 focus:border-blue-600"
              >
                Anuluj
              </button>
              <button
                type="submit"
                id="save-button"
                className="bg-slate-200 rounded-lg px-4 py-2 duration-200 ease-in-out md:hover:border-blue-600 md:hover:text-white md:hover:bg-blue-600 focus:outline-none border-2 focus:border-blue-600"
              >
                Zapisz
              </button>
            </div>
          </form>
        </div>
      </div>
      <main className="max-w-5xl mx-auto">
        <div
          id="logo"
          className="mx-auto mb-2 mt-10 p-4 w-36 h-36 bg-green-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-28 h-28"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
        </div>
        <div id="balance">
          <h1 className="w-full flex justify-center items-center p-4 text-2xl mb-2 h-16">
            <span className="text-center" id="total"></span>
          </h1>
        </div>
        <section
          id="buttons-section"
          className="flex md:hidden w-full mx-0 px-4 justify-between"
        >
          <button
            id="expense-button"
            className="uppercase w-1/2 p-2 rounded-t-lg border-2 border-b-transparent border-white text-xl text-center font-semibold"
          >
            wydatki
          </button>
          <span className="border-b-2 border-white w-2"></span>
          <button
            id="income-button"
            className="uppercase w-1/2 p-2 rounded-t-lg border-2 text-slate-400 border-b-white border-white text-xl text-center font-semibold"
          >
            przychody
          </button>
        </section>
        <section
          id="main-section"
          className="flex mx-0 md:mx-4 justify-center flex-wrap md:flex-nowrap"
        >
          <div
            id="expense-section"
            className="p-4 h-full md:w-1/2 w-full flex-col border-0 md:border-r-4 border-white flex"
          >
            <h2 className="uppercase p-2 hidden md:block rounded-t-lg bg-white text-xl text-center font-semibold mb-4">
              wydatki
            </h2>
            <form
              id="expense-form"
              className="flex items-center justify-between mb-2"
            >
              <div className="relative w-2/3 mr-2">
                <input
                  type="text"
                  id="new-item-expenses"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-item-expenses"
                  className="absolute md:text-base text-xl text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Nazwa wydatku
                </label>
              </div>
              <div className="relative w-1/4 mr-2">
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  id="new-item-expenses-value"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-item-expenses-value"
                  className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Kwota
                </label>
              </div>
              <button
                type="submit"
                id="add-button-expenses"
                title="Dodaj"
                className="p-2 bg-white rounded-full md:hover:bg-blue-500 md:active:bg-blue-600 md:hover:text-white ease-in-out duration-200 border-2 outline-none focus:border-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-10 h-10 md:w-9 md:h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </form>
            <div className="border-b-4 border-white mb-4"></div>
            <div className="mb-1 h-full overflow-y-auto">
              <ul id="item-list-expenses"></ul>
            </div>
            <h2 className="text-xl">
              Suma wydatków: <span id="expenses-total"></span>
              <span className="font-semibold"> zł</span>
            </h2>
          </div>
          <div
            id="income-section"
            className="p-4 h-full md:w-1/2 w-full flex-col hidden md:flex"
          >
            <h2 className="uppercase hidden md:block p-2 rounded-t-lg bg-white text-xl text-center font-semibold mb-4">
              przychody
            </h2>
            <form
              id="income-form"
              className="flex items-center justify-between mb-2"
            >
              <div className="relative w-2/3 mr-2">
                <input
                  type="text"
                  id="new-item-income"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5 w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-item-income"
                  className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Nazwa przychodu
                </label>
              </div>
              <div className="relative w-1/4 mr-2">
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  id="new-item-income-value"
                  required
                  className="block rounded-lg px-2.5 pb-2 pt-5  w-full text-xl md:text-base border-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="new-item-income-value"
                  className="absolute text-xl md:text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Kwota
                </label>
              </div>
              <button
                type="submit"
                id="add-income-button"
                title="Dodaj"
                className="p-2 bg-white rounded-full md:hover:bg-blue-600 md:active:bg-blue-500 md:hover:text-white ease-in-out duration-200 border-2 outline-none focus:border-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-10 h-10 md:w-9 md:h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </form>
            <div className="border-b-4 border-white mb-4"></div>
            <div className="mb-1 h-full overflow-y-auto">
              <ul id="item-list-income"></ul>
            </div>
            <h2 className="text-xl">
              Suma przychodów: <span id="income-total"></span>
              <span className="font-semibold"> zł</span>
            </h2>
          </div>
        </section>
      </main>
      <script src="script.js"></script>
    </body>
  </>
);

export default App;
