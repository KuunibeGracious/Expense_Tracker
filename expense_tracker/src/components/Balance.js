import React from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { useContext } from 'react';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='balance'>
        <p>Balance</p>
        <h1>GHC {total }</h1> 
    </div>
  )
}

export default Balance
