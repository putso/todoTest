import { RootState } from "./store";

export function saveToLocalStorage(state:RootState) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
export  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }