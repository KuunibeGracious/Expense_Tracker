import React from 'react'

const Transactions = ({list}) => {
  return (
    <div className='transactions_list list'>
        <p>Transactions</p>
          {list.map((item) => {
          return (
                <ul key={item.id}>
                   <li>{ item.name }</li>
                  <li>GHC {item.amount }</li>
                </ul> 
        )
      })}
    </div>
  )
}

export default Transactions
