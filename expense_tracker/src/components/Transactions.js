import React from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { useContext } from 'react';


const Transactions = ({ Data }) => {
  const {transactions} = useContext(GlobalContext);
  console.log(transactions);

  return (
    <div className='transactions_list list'>
        <p>Transactions</p>
          {transactions.map((transaction) => {
          return (
                <ul key={transaction.id}>
                   <li>{ transaction.name }</li>
                  <li>GHC {transaction.amount }</li>
                  {/* <button onClick={() => deleteTransaction(transaction.id)}>delete</button> */}
                </ul> 
        )
      })}
    </div>
  )
}

export default Transactions
