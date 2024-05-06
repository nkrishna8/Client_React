import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { decrementActionCreator, incrementActionCreator, resetActionCreator } from '../reducres/countReducer';

export default function Counter() {

const count=useSelector(state=>state.count);
const dispatch=useDispatch();
const [value,setValue]=useState(1);

  return (
    <>
    <h2>{count}</h2>
    <input type='number' onChange={e=>setValue(parseInt(e.target.value))}/>
    <Button variant="outline-primary" onClick={()=>dispatch(incrementActionCreator(value))}>Increment </Button>
    <Button variant="outline-danger" onClick={()=>dispatch(decrementActionCreator(value))}>Decrement </Button>
    <Button variant="outline-success" onClick={()=>dispatch(resetActionCreator())}>Reset </Button>
    </>
  )
}
