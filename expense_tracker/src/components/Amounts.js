import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const Amounts = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className='amounts'>
      <div className="income">
        <p>Income</p>
        <h2>GHC {income}</h2>
      </div>
      <div className="expence">
        <p>Expense</p>
        <h2>GHC {expense} </h2>
      </div>
    </div>
  )
}

export default Amounts
