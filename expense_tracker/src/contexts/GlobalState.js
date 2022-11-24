import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { Data } from '../TransactionsData';

//initial state
const initialState = {
    transactions: Data
}

//create context
export const GlobalContext = createContext(initialState);

//global provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actioins
    function deleteTransaction(id) {
        dispatch({
            type: 'delete_transaction',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'add_transaction',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}