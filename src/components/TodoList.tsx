import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectFilter, selectTodos } from "../store/TodoSlice";
import { Todo } from "../types";
import TodoItem from "./TodoItem";
const StyledTodoList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1px;
`
const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const filter = useAppSelector(selectFilter)
  const filterHandler = (todo: Todo) => {
    if (filter === "all") return true;
    if (filter === "active" && todo.completed === false) return true;
    if (filter === "completed" && todo.completed === true) return true;
    return false;
  };
  return (

    <AnimatePresence>
    
    <StyledTodoList layout >
      
      {todos.filter(filterHandler).map((el) => (
        <TodoItem key={el.id} todo={el} />
      ))}
      
    </StyledTodoList>
    </AnimatePresence>
  );
};

export default TodoList;
