import React from 'react';
import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { TransactionContext } from '../App';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

const Form = ({addTransaction}) => {
  const fromSchema = yup.object().shape({
    description: yup.string().required(),
    amount: yup.number().required()
  });
  
  const { register, handleSubmit} = useForm({
    resolver: yupResolver(fromSchema),
  });
  return (
    <form  onSubmit={handleSubmit(addTransaction)}>
        <input 
              type="text"
              placeholder='Payment Description'
              {...register("description")}
          />
          
        <input 
              type="text"
              placeholder='Amount'
              {...register("amount")}
          />
          {/* <button type="submit">Add Transaction</button> */}
        <input type="submit" value='Add Transaction'/>
    </form>
  )
}

export default Form
