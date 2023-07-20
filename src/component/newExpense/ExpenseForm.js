import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){
    const [entedTiter, setIntedTitle] = useState('')
   const [entedAmount, setEntedAmount]= useState('')
   const [entedDate, setEntedDate]= useState('')

// const [userInput, setUserInput]=useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// })

    const TitleChangeHandler=(event)=>{
        setIntedTitle(event.target.value)
    }
    const AmountChangeHandler = event =>{
        setEntedAmount(event.target.value)
    }
    const DateChangeHandler = event =>{
        setEntedDate(event.target.value)
    }
    const SubmitHandler = (event)=>{
        event.preventDefault();
        const expenseData={
            title: entedTiter,
            amount: entedAmount,
            date : new Date(entedDate)
        }
        props.onSaveExpenseData(expenseData)
        setEntedDate('')
        setIntedTitle('')
        setEntedAmount('')

    }
    return(
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={TitleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-13-31' onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm