import Logo from "./Components/Logo/Logo";
import Balance from "./Components/Balance/Balance";
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Total from "./Components/Total/Total";
import Switch from "./Components/Switch/Switch";

function App() {
  const [incomes, setIncomes] = useState(() => {
    const storageState = localStorage.getItem("incomes");
    return storageState ? JSON.parse(storageState) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const storageState = localStorage.getItem("expenses");
    return storageState ? JSON.parse(storageState) : [];
  });

  const [incomesTotal, setIncomesTotal] = useState(() => {
    const storageState = localStorage.getItem("incomesTotal");
    return storageState ? JSON.parse(storageState) : 0;
  });

  const [expensesTotal, setExpensesTotal] = useState(() => {
    const storageState = localStorage.getItem("expensesTotal");
    return storageState ? JSON.parse(storageState) : 0;
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  useEffect(() => {
    localStorage.setItem("incomesTotal", JSON.stringify(incomesTotal));
  }, [incomesTotal]);

  useEffect(() => {
    localStorage.setItem("expensesTotal", JSON.stringify(expensesTotal));
  }, [expensesTotal]);

  const addNewIncome = (title, amount) => {
    const newPosition = {
      title,
      amount,
      id: Math.random(),
    };
    setIncomes((prevState) => [newPosition, ...prevState]);
    setIncomesTotal((prevState) => prevState + parseFloat(amount));
  };

  const addNewExpense = (title, amount) => {
    const newPosition = {
      title,
      amount,
      id: Math.random(),
    };
    setExpenses((prevState) => [newPosition, ...prevState]);
    setExpensesTotal((prevState) => prevState + parseFloat(amount));
  };

  const handleExpensesRemove = (id, amount) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    setExpensesTotal((prevState) =>
      parseFloat((prevState - parseFloat(amount)).toFixed(2))
    );
  };

  const handleIncomesRemove = (id, amount) => {
    const newIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(newIncomes);
    setIncomesTotal((prevState) =>
      parseFloat((prevState - parseFloat(amount)).toFixed(2))
    );
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

  return (
    <div className="bg-slate-200 flex h-[100svh]">
      <main className="max-w-5xl mx-auto">
        <Logo />
        <Balance balance={incomesTotal - expensesTotal} />
        <Switch
          onExpensesPressed={setExpensesActive}
          onIncomesPressed={setIncomesActive}
          expenseIsActive={expenseIsActive}
          incomeIsActive={incomeIsActive}
        />
        <section className="flex mx-0 md:mx-4 justify-center h-[calc(100svh-19.5rem)] md:h-[calc(100svh-16.5rem)]">
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
            <List item={expenses} onItemRemove={handleExpensesRemove} />
            <Total title="Suma wydatków" value={expensesTotal} />
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
            <List item={incomes} onItemRemove={handleIncomesRemove} />
            <Total title="Suma przychow" value={incomesTotal} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
