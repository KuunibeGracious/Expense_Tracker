import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Amounts from './components/Amounts';
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { useState, createContext, } from 'react';

export const TransactionContext =  createContext();

function App() {
  
  return (
    <div className="App">
      <TransactionContext.Provider value={[]}>
      <Header />
      <Balance />
      <Amounts/>
      <div className="transaction_container">
          <History/>
        <hr className='line' />
        <NewTransaction />
        {list.length === 0? <div className='zero_transactions'> <p>You have no transactions</p> </div> : <Transactions list={list}/>}
      </div>
      </TransactionContext.Provider>
    </div>
  );
}

export default App;
