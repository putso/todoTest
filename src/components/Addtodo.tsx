import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, {
  FC,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useAppDispatch } from "../store/store";
import { addTodoAction } from "../store/TodoSlice";
import { Todo } from "../types";
const StyledAddTodo = styled(motion.div)`
  width: 100%;
  color: #80808055;
  input {
    height: 50px;
    border: none;
    outline: none;
    width: 100%;
    font-style: italic;
    padding-inline: 10px;
    font-size: inherit;
    color: black;
  }
  input::placeholder  {
    color: #80808055;
  }
`;
const Addtodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text: text,
      completed: false,
    };
    dispatch(addTodoAction(newTodo));
  };
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      const isFocus = document.activeElement === inputRef.current;
      const text = inputRef.current?.value;
      if (isFocus && text && e.key === "Enter") {
        inputRef.current.value = "";
        addTodo(text);
      }
    };
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  });
  return (
    <StyledAddTodo layout={false} layoutId="nope">
      <input type="text" placeholder="What to be done?" ref={inputRef} />
    </StyledAddTodo>
  );
};

export default Addtodo;
