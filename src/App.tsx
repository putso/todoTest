import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/Todos";
import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
const Ahead = styled.div`
  color: #e9d9d8;
  font-size: 100px ;
  font-weight: lighter;
`;
function App() {
  return (
    <main className="main">
      <Ahead>todos</Ahead>
      <TodoList />
    </main>
  );
}

export default App;
