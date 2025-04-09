import Expense from '../expense/Expense'
import { useSelector } from 'react-redux'
export default function History() {
  const transactions = useSelector(state => state.expenses)
  return (
    <div className="history mt-8">
      <p className='font-bold text-lg'>History</p>
      <hr />
      <ul className='expenses mt-8'>
      {
        transactions.length > 0 &&
        transactions.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))
      }
      </ul>
    </div>
  )
}
