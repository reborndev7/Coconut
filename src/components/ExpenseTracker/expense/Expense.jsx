import { useDispatch } from "react-redux";
import { removeTransaction } from "../../../features/expense/expenseSlice";

export default function Expense({expense}) {

  const dispatch = useDispatch();

  function deleteTransaction(id) {
    dispatch(removeTransaction(id));
  }

  const type = expense.amount < 0 ? 'expense' : 'income';
  const sign = expense.amount < 0 ? '-' : '+';

  return (
    <li className={`expense-item shadow-md py-4 px-8 mt-3 ${type} flex justify-between rounded-sm`}>
      <button className="delBtn" onClick={() => deleteTransaction(expense.id)}>Delete Expense</button>
      <span>{expense.name}</span>
      <span><strong>{sign}${Math.abs(expense.amount)}</strong></span>
    </li>
  )
}
