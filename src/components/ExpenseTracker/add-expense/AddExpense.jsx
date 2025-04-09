import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../features/expense/expenseSlice";

export default function AddExpense() {
  const transName = useRef();
  const transAmt = useRef();

  const dispatch = useDispatch();

  function handleAddTrans() {

    dispatch(addTransaction({
      name: transName.current.value,
      amount: +transAmt.current.value
    }));

    transName.current.value = null;
    transAmt.current.value = null;
  }

  return (
    <div className="add-expense mt-8">
      <p className='font-bold text-lg'>Add new transaction</p>
      <hr />
      <div className="mt-8 add-expense-form">
        <label htmlFor="transaction" className="block text-sm/6 font-medium text-gray-900">Transaction Name:</label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input type="text" name="transaction" id="transaction" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"  ref={transName} />
          </div>
        </div>
        <br />
        <label htmlFor="amount" className="block text-sm/6 font-medium text-gray-900">Amount: <br />
        (positive - income, negative - expense)
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input type="text" name="amount" id="amount" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"  ref={transAmt} />
          </div>
        </div>
        <div className="mt-8">
          <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleAddTrans}>Add Transaction</button>
        </div>
      </div>
    </div>
  )
}
