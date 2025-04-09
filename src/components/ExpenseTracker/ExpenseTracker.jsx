import React from 'react'
import Balance from './balance/Balance'
import History from './history/History'
import AddExpense from './add-expense/AddExpense'
import './expensetracker.css'

export default function ExpenseTracker() {
  return (
    <>
      <h2 className='text-5xl font-black mb-5 text-center text-red-600'>Track Expenses with Coconut.</h2>
      <hr className='mb-8'/>
      <Balance />
      <History />
      <AddExpense />
    </>
  )
}
