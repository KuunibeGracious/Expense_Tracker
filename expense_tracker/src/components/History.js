import React from 'react';
import HistoryHead from './HistoryHead';

const History = ({list}) => {  
  return (
    <div>
      <HistoryHead/>
      {/* <div className="history_list list">
        {list.map((item) => {
            return (        
        <ul 
            key={item.id}>
            <li>{item.name}</li>
            <li>GHC {item.amount}</li>
        </ul>
            )
        })}
      </div> */}
    </div>
  )
}

export default History
