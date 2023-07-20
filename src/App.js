
import Expenses from "./component/expenses/Expenses";
import NewExpense from "./component/newExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const AddHandler = (expense)=>{
    console.log('hello expenses')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={AddHandler}/>
      <Expenses expenses={expenses}/>

    </div>
  )
    
     
  
}

export default App;
