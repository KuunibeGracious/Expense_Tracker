import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Amounts from './components/Amounts';
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { Data } from './TransactionsData';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header />
      <Balance />
      <Amounts/>
      <div className="transaction_container">
          <History/>
        <hr className='line' />
        <NewTransaction  />
         <Transactions Data={Data}/>
        </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
