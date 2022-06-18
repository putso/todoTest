import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../store/store";
import {
  addTodoAction,
  ChangeStatus,
  changeStatusAction,
} from "../store/TodoSlice";
import CheckBox from "./CheckBox";
interface Todo {
  text: string;
  completed: boolean;
  id: string;
}
interface TodoItemProps {
  todo: Todo;
}
const StyledTodoItem = styled(motion.div)`
  display: flex;
  width: 100%;
  background-color: white;
  align-items: center;
  height: 50px;
  gap: 10px;
  padding-inline: 5px;
`;
const StyledTodoText = styled.input<{ completed: boolean }>`
  text-decoration: ${(el) => (el.completed ? "line-through" : "unset")};
  border: unset;
  outline: unset;
  font: inherit;
  color: ${(el) => (el.completed ? "gray" : "black")};
`;
const Radio = styled.input`
  border-radius: 50%;
`;
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const updateStatus = () => {
    const changeStatus: ChangeStatus = {
      id: todo.id,
      completed: !todo.completed,
    };
    dispatch(changeStatusAction(changeStatus));
  };
  return (
    <StyledTodoItem
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CheckBox onClick={updateStatus} checked={todo.completed}></CheckBox>
      <StyledTodoText
        value={todo.text}
        readOnly={true}
        completed={todo.completed}
      />
    </StyledTodoItem>
  );
};

export default TodoItem;
