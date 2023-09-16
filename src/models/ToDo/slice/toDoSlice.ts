import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ToDo } from "../types/ToDo";

const initialState: ToDo[] = [];

export const toDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDo>) => {
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

export const { actions: toDoActions } = toDoSlice;
export const { reducer: toDoReducer } = toDoSlice;