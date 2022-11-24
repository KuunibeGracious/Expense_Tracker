import React, { useState } from 'react'

const Amounts = () => {
//   const arr = [5, 15, 45];


//   for (const value of arr) {
//   sum += value;
// }

// console.log(sum); // 👉️ 65

  return (
    <div className='amounts'>
      <div className="income">
        <p>Income</p>
        <h2>GHC 200.00</h2>
      </div>
      <div className="expence">
        <p>Expense</p>
        <h2>GHC 60.00</h2>
      </div>
    </div>
  )
}

export default Amounts
