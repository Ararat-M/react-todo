import type { DeepPartial } from "@reduxjs/toolkit";
import type { ToDo } from "../types/ToDo";
import { toDoActions, toDoReducer } from "./toDoSlice";

describe("userSlice", () => {
    const state: DeepPartial<ToDo[]> = [
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
            toDoReducer(state as ToDo[], toDoActions.addToDo({ title: "new task 3", id: "3", isCompleted: false }))
        ).toEqual([...state, { title: "new task 3", id: "3", isCompleted: false }]);
    });

    test("clearCompleted", () => {
        expect(
            toDoReducer(state as ToDo[], toDoActions.clearCompleted())
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
            toDoReducer(state as ToDo[], toDoActions.changeState("2"))
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