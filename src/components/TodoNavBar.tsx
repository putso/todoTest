import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectActiveTodos, setFilter, todoFilter } from "../store/TodoSlice";
import ClearButton from "./ClearButton";
import NavBarFilter from "./NavBarFilter";
const NavBar = styled(motion.div)`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #727272;
  font-size: 15px;
`;
const TodoNavBar = () => {
  const activeTodos = useAppSelector(selectActiveTodos);
  return (
    <NavBar layout={false} layoutId='nope3'>
      <div className="todolist__active-items">
        {`${activeTodos} items left `}
      </div>
      <NavBarFilter />
      <ClearButton />
    </NavBar>
  );
};

export default TodoNavBar;
