import type { DeepPartial } from "@reduxjs/toolkit";
import type { ToDoSchema } from "../types/ToDoSchema";
import { toDoListActions, toDoListReducer } from "./toDoListSlice";

describe("userSlice", () => {
    const state: DeepPartial<ToDoSchema[]> = [
        {
            title: "new completed task",
            id: "1",
            isCompleted: true
        },
        {
            title: "new task",
            id: "2",
            isCompleted: false
        }
    ];

    test("addToDo", () => {
        expect(
            toDoListReducer(state as ToDoSchema[], toDoListActions.addToDo({ title: "new task 3", id: "3", isCompleted: false }))
        ).toEqual([...state, { title: "new task 3", id: "3", isCompleted: false }]);
    });

    test("clearCompleted", () => {
        expect(
            toDoListReducer(state as ToDoSchema[], toDoListActions.clearCompleted())
        ).toEqual([
            {
                title: "new task",
                id: "2",
                isCompleted: false
            }
        ]);
    });

    test("changeState", () => {
        expect(
            toDoListReducer(state as ToDoSchema[], toDoListActions.changeState("2"))
        ).toEqual([
            {
                title: "new completed task",
                id: "1",
                isCompleted: true
            },
            { title: "new task",
                id: "2",
                isCompleted: true
            }
        ]);
    });
});