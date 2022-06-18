import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./LocalStorage";
import TodoSlice from "./TodoSlice";


export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
store.subscribe(() => saveToLocalStorage(store.getState()));
