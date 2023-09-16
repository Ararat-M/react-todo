import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Main } from "./Main";
import { StoreProvider, type StateSchema } from "store";
import { DeepPartial } from "@reduxjs/toolkit";

jest.mock("nanoid", () => { return { nanoid: () => Math.floor(Math.random() * 1000) } })

describe("Main", () => {
  beforeEach(() => {
    const initialState: DeepPartial<StateSchema> = {
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
    }

    render(
        <StoreProvider initialState={initialState}>
          <Main />
        </StoreProvider>
    )
  })

  describe("ToDo", () => {
    test("add ToDo", async () => {
      const toDoItemElement = screen.getAllByTestId("toDoItem");
      const toDoTitleElement = screen.getAllByTestId("toDoTitle");

      expect(toDoItemElement[0]).toBeInTheDocument();
      expect(toDoTitleElement[0]).toHaveTextContent("new task");
    })

    test("change state ToDo", () => {
      const inputCheckboxElement = screen.getAllByTestId("checkbox");

      expect(inputCheckboxElement[0]).not.toBeChecked();
      fireEvent.click(inputCheckboxElement[0]);
      expect(inputCheckboxElement[0]).toBeChecked();

      expect(inputCheckboxElement[1]).not.toBeChecked();
    })
  });

  describe("Rendering different lists", () => {
    beforeEach(() => {
      const inputCheckboxElement = screen.getAllByTestId("checkbox");

      fireEvent.click(inputCheckboxElement[0]);
      fireEvent.click(inputCheckboxElement[2]);
    })

    test("render list \"all\"", async () => {
      const btnElement = screen.getByTestId("btnAll");
      fireEvent.click(btnElement);

      const toDoItemElement = screen.getAllByTestId("toDoItem");
      expect(toDoItemElement.length).toBe(3);
    })

    test("render list \"active\"", async () => {
      const btnElement = screen.getByTestId("btnActive");
      fireEvent.click(btnElement);

      await waitFor(() => expect(screen.getAllByTestId("toDoItem").length).toBe(1))
    })

    test("render list \"completed\"", async () => {
      const btnElement = screen.getByTestId("btnCompleted");
      fireEvent.click(btnElement);

      await waitFor(() => expect(screen.getAllByTestId("toDoItem").length).toBe(2))
    })

    test("use button \"clear completed\"", async () => {
      const btnElementClear = screen.getByTestId("btnClear");
      fireEvent.click(btnElementClear);
      
      await waitFor(() => expect(screen.getAllByTestId("toDoItem").length).toBe(1))
    })
  });
})
