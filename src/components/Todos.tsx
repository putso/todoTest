import React from "react";
import Addtodo from "./Addtodo";
import TodoNavBar from "./TodoNavBar";
import TodoList from "./TodoList";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from "framer-motion";

const StyledTodos = styled(motion.div)`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 3;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 2px;
    right: 2px;
    top:100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: -20;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 5px;
    right: 5px;
    top: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: -10;
  }
`;
const Todos = () => {
  return (
    <LayoutGroup>
    <StyledTodos layout>
      <Addtodo />
      <TodoList />
      <TodoNavBar />
    </StyledTodos>
    </LayoutGroup>
  );
};

export default Todos;
