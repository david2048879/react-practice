import './NewExpense.css'
import React from "react";
import ExpenseForm from './ExpenseForm'

function NewExpense(props){
    const SaveExpenseData = (enteredExpenseData)=>{
      const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData)


    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseData}/>

        </div>
    )
}
export default NewExpense