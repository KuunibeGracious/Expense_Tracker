import React,{useContext, useState} from 'react';
import Form from './Form';
import { GlobalContext } from '../contexts/GlobalState';

const NewTransaction = () => {
  const {addTransaction, transactions} = useContext(GlobalContext)
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length === 0 ? 1 : transactions[transactions.length - 1].id + 1,
      name: description,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  
  return (
    <div className='add_transaction'>
      <p>Add New Transaction</p>
      <Form
        description={description}
        amount={amount}
        onSubmit={onSubmit}
        setDescription={setDescription}
        setAmount={setAmount}
      />
    </div>
  )
}

export default NewTransaction
