import type { DeepPartial } from "@reduxjs/toolkit";
import { getToDoList } from "./getToDoList";
import type { StateSchema } from "store/config/StateSchema";

describe("getToDoList", () => {
  test("should return toDo list", () => {
    const state: DeepPartial<StateSchema> = {
      toDoList: [
        {
          title: "new task",
          id: "1",
          isCompleted: false
        },
        {
          title: "new task 2",
          id: "2",
          isCompleted: false
        },
        {
          title: "new task 3",
          id: "3",
          isCompleted: false
        }
      ]
    };

    expect(getToDoList(state as StateSchema)).toEqual([
      {
        title: "new task",
        id: "1",
        isCompleted: false
      },
      {
        title: "new task 2",
        id: "2",
        isCompleted: false
      },
      {
        title: "new task 3",
        id: "3",
        isCompleted: false
      }
    ]);
  });
});