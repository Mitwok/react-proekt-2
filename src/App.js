import Logo from "./Components/Logo/Logo";
import Balance from "./Components/Balance/Balance";
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Total from "./Components/Total/Total";
import Switch from "./Components/Switch/Switch";
import Modal from "./Components/Modal/Modal";

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const minHeight =
    38.75 * parseFloat(getComputedStyle(document.documentElement).fontSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setInitialIncomes = () => {
    const storageState = localStorage.getItem("incomes");
    return storageState ? JSON.parse(storageState) : [];
  };

  const setInitialExpenses = () => {
    const storageState = localStorage.getItem("expenses");
    return storageState ? JSON.parse(storageState) : [];
  };

  const [incomes, setIncomes] = useState(() => setInitialIncomes());

  const [expenses, setExpenses] = useState(() => setInitialExpenses());

  const incomesTotal = incomes.reduce(
    (accumulator, item) => accumulator + parseFloat(item.amount),
    0
  );

  const expensesTotal = expenses.reduce((accumulator, item) => {
    const expensesItem = parseFloat(item.amount);
    accumulator += expensesItem;
    return accumulator;
  }, 0);

  const [listType, setListType] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  const addNewIncome = (title, amount) => {
    const newPosition = {
      title,
      amount,
      id: Math.random(),
    };
    setIncomes((prevState) => [newPosition, ...prevState]);
  };

  const addNewExpense = (title, amount) => {
    const newPosition = {
      title,
      amount,
      id: Math.random(),
    };
    setExpenses((prevState) => [newPosition, ...prevState]);
  };

  const handleExpensesRemove = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const handleIncomesRemove = (id) => {
    const newIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(newIncomes);
  };

  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editId, setEditId] = useState("");

  const saveChanges = (inputTitle, inputAmount, inputId) => {
    if (listType === "expenses") {
      setExpenses((prevState) => {
        return prevState.map((expense) => {
          if (expense.id === inputId) {
            return {
              ...expense,
              title: inputTitle ? inputTitle : expense.title,
              amount: inputAmount
                ? parseFloat(inputAmount).toFixed(2)
                : expense.amount,
            };
          }
          return expense;
        });
      });
      closeModal();
    } else if (listType === "incomes") {
      setIncomes((prevState) => {
        return prevState.map((income) => {
          if (income.id === inputId) {
            return {
              ...income,
              title: inputTitle ? inputTitle : income.title,
              amount: inputAmount
                ? parseFloat(inputAmount).toFixed(2)
                : income.amount,
            };
          }
          return income;
        });
      });
      closeModal();
    }
  };

  const expensesEditButton = (id, amount, title) => {
    setEditTitle(title);
    setEditAmount(amount);
    setEditId(id);
    setModalActive(true);
    setListType("expenses");
  };

  const incomesEditButton = (id, amount, title) => {
    setEditTitle(title);
    setEditAmount(amount);
    setEditId(id);
    setModalActive(true);
    setListType("incomes");
  };

  const [expenseIsActive, setExpensesButton] = useState(true);
  const [incomeIsActive, setIncomesButton] = useState(false);

  const setExpensesActive = () => {
    setExpensesButton(true);
    setIncomesButton(false);
  };

  const setIncomesActive = () => {
    setIncomesButton(true);
    setExpensesButton(false);
  };

  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setEditTitle("");
    setEditAmount("");
    setEditId("");
    setListType("");
    setModalActive(false);
  };

  return (
    <div
      className={`bg-slate-200 flex ${
        windowHeight > minHeight ? "h-[100svh]" : "h-[38.75rem]"
      }`}
    >
      {modalActive ? (
        <Modal
          title={editTitle}
          amount={editAmount}
          id={editId}
          onCancelButon={closeModal}
          onSaveForm={saveChanges}
        />
      ) : null}
      <main className="max-w-5xl mx-auto">
        <Logo />
        <Balance balance={(incomesTotal - expensesTotal).toFixed(2)} />
        <Switch
          onExpensesPressed={setExpensesActive}
          onIncomesPressed={setIncomesActive}
          expenseIsActive={expenseIsActive}
          incomeIsActive={incomeIsActive}
        />
        <section className="flex mx-0 md:mx-4 justify-center h-[calc(100%-19.5rem)] md:h-[calc(100%-16.5rem)]">
          <div
            className={`p-4 h-full md:w-1/2 w-full flex-col ${
              expenseIsActive ? "flex" : "hidden md:flex"
            }`}
          >
            <Form
              label="wydatki"
              titlePlaceholder="Nazwa wydatku"
              valuePlaceholder="Kwota"
              onAddNewPosition={addNewExpense}
            />
            <List
              item={expenses}
              onItemRemove={handleExpensesRemove}
              onItemEdit={expensesEditButton}
            />
            <Total title="Suma wydatków" value={expensesTotal.toFixed(2)} />
          </div>
          <div className="border-0 md:border-r-4 border-white "></div>
          <div
            className={`p-4 h-full md:w-1/2 w-full flex-col md:flex ${
              incomeIsActive ? "flex" : "hidden md:flex"
            }`}
          >
            <Form
              label="przychody"
              titlePlaceholder="Nazwa przychodu"
              valuePlaceholder="Kwota"
              onAddNewPosition={addNewIncome}
            />
            <List
              item={incomes}
              onItemRemove={handleIncomesRemove}
              onItemEdit={incomesEditButton}
            />
            <Total title="Suma przychow" value={incomesTotal.toFixed(2)} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
