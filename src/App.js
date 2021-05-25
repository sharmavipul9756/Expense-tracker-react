import {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Electricity Bill",
    amount: "2000",
    date: new Date(2021, 4, 28),
  },
  {
    id: "e2",
    title: "Newspaper Bill",
    amount: "400",
    date: new Date(2021, 6, 28),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: "4000",
    date: new Date(2021, 4, 28),
  },
  {
    id: "e4",
    title: "Food",
    amount: "6000",
    date: new Date(2021, 5, 28),
  },
];

const  App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
          return [expense, ...prevExpenses]
        });
        
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
