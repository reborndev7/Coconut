import { useSelector } from "react-redux";

export default function Balance() {

  const transactions = useSelector(state => state.expenses);

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc+= item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc+= item), 0)*-1).toFixed(2);

  return (
    <div className="balance">
      <p className='font-bold text-lg uppercase'>Your balance:</p>
      <h3 className='text-5xl font-bold'>${balance}</h3>

      <div className="income-expense bg-blue-50 p-5 shadow-md mt-6">
        <div className="flex">
          <div className="income flex-1 text-center border-r-1">
            <p className='uppercase text-sm'>Income:</p>
            <h4 className="text-3xl font-bold text-green-600">${income}</h4>
          </div>
          <div className="expense flex-1 text-center">
            <p className='uppercase text-sm'>Expense:</p>
            <h4 className="text-3xl font-bold text-red-600">${expense}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
