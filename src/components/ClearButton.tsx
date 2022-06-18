import React from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../store/store';
import { clearCompletedAction } from '../store/TodoSlice';
const Button = styled.div`
background-color : none;
cursor: pointer;

`
const ClearButton = () => {
    const dispatch = useAppDispatch();
    const clickHandler = () => {
        dispatch(clearCompletedAction());
    }
  return (
    <Button onClick={clickHandler}>Clear Competed</Button>
  )
}

export default ClearButton