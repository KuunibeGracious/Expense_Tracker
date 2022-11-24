import React from 'react';
const Form = (props) => {

  return(
    <form onSubmit={props.onSubmit} action="">
      <input type="text" value={props.description} placeholder="description" onChange={(e) => props.setDescription(e.target.value)} />

      <input type="form" value={props.amount} placeholder="amount" onChange={(e) => props.setAmount(e.target.value)} />
      <button type='submit'>Add Transaction</button>

    </form>
  )
}

export default Form
