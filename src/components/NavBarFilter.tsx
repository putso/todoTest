import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectActiveTodos, selectFilter, setFilter, todoFilter } from '../store/TodoSlice';
import styled from 'styled-components';
interface StyledFilterItemProps {
    active:boolean;
}
const StyledFilterItem = styled.div<StyledFilterItemProps>`
border-radius: 3px;
outline: ${props => props.active ? '1px solid #e9d9d8': 'unset'};
cursor: pointer;
padding: 3px;
`;
const NavBarFilter = () => {
    const activeFilter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();
  return  <div className="todolist__filter">
  {["All", "Active", "Completed"].map((el, i) => {
    return (
      <StyledFilterItem
        key={i}
        onClick={() =>
          dispatch(setFilter(el.toLowerCase() as todoFilter))
        }
        active = {el.toLowerCase() === activeFilter}
      >
        {el}
      </StyledFilterItem>
    );
  })}
</div>
}

export default NavBarFilter

