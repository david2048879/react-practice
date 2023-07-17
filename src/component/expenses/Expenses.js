import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function expenses(props){
    return(
        <Card className='expenses'>

      <ExpenseItem title = {props.expenses[0].title} date={props.expenses[0].date} price={props.expenses[0].amount}/>
      <ExpenseItem title = {props.expenses[1].title} date={props.expenses[1].date} price={props.expenses[1].amount}/>
      <ExpenseItem title = {props.expenses[2].title} date={props.expenses[2].date} price={props.expenses[2].amount}/>
      <ExpenseItem title = {props.expenses[3].title} date={props.expenses[3].date} price={props.expenses[3].amount}/>
        </Card>
    )
}

export default expenses