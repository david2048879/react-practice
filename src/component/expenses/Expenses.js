import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'

function Expenses(props){

const [filteredYear, setFilteredYear]=useState('2020')

  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() ===filteredYear;
  })
    return(
        <Card className='expenses'>
           <ExpensesChart expense = {filteredExpenses}/>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
   
          {filteredExpenses.length ===0 ? 
          (
          <p>no expense data</p>) :(
            filteredExpenses.map(expense =>  <ExpenseItem id = {expense.id} title = {expense.title} date={expense.date} price={expense.amount}/>)

          )}

          {}
         
        </Card>
    )
}

export default Expenses
