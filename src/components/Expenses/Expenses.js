import "./Expenses.css";
import React, {useState} from "react";
import ExpenseList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses js");
      setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

 

  return (
<div>
<Card className="expenses">
<ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
<ExpensesChart expenses={filteredExpenses}/>
    <ExpenseList items={filteredExpenses}/>
   </Card>
</div>
  );
}
