import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ToDoSchema } from "../types/ToDoSchema";

const initialState: ToDoSchema[] = [];

export const toDoListSlice = createSlice({
    name: "toDoList",
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDoSchema>) => {
            state.push(action.payload);
        },
        clearCompleted: (state) => {
            return state.filter(item => !item.isCompleted)
        },
        changeState: (state, action: PayloadAction<string>) => {
            state.map((item) => {
                if (action.payload === item.id) item.isCompleted = !item.isCompleted;
                return item
            })
        }
    }
});

export const { actions: toDoListActions } = toDoListSlice;
export const { reducer: toDoListReducer } = toDoListSlice;