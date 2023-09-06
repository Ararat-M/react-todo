import { fireEvent, render, screen } from "@testing-library/react"
import { Main } from "./Main";

jest.mock("nanoid", () => { return { nanoid: () => "123" } })

describe("Main", () => {
  beforeEach(() => {
    render(<Main />)

    const inputElement = screen.getByTestId("input");
    const formElement = screen.getByTestId("form");
    
    fireEvent.change(inputElement, {target: {value: "new task"}});
    fireEvent.submit(formElement);
  })

  test("add ToDo", async () => {
    const toDoitemElement = screen.getByTestId("toDoItem");
    const toDoTitleElement = screen.getByTestId("toDoTitle");

    expect(toDoitemElement).toBeInTheDocument();
    expect(toDoTitleElement).toHaveTextContent("new task");
  })

  test("change state ToDo", async () => {
    const inputCheckboxElement = screen.getByTestId("checkbox");

    expect(inputCheckboxElement).not.toBeChecked();
    
    fireEvent.click(inputCheckboxElement);
    expect(inputCheckboxElement).toBeChecked();
  })
});

// describe("Rendering different lists", () => {
//   beforeEach(() => {
//     render(<Main />)
//     const inputElement = screen.getByTestId("input");
//     const formElement = screen.getByTestId("form");
    
//     fireEvent.change(inputElement, {target: {value: "new task 1"}});
//     fireEvent.submit(formElement);

//     fireEvent.change(inputElement, {target: {value: "new task 2"}});
//     fireEvent.submit(formElement);

//     fireEvent.change(inputElement, {target: {value: "new task 3"}});
//     fireEvent.submit(formElement);
//   })

//   test("render list \"all\"", async () => {
//     const btnElement = screen.getByTestId("btnAll");
//   })

//   test("render list \"active\"", async () => {
//     const btnElement = screen.getByTestId("btnActive");
//   })

//   test("render list \"completed\"", async () => {
//     const btnElement = screen.getByTestId("btnCompleted");
//   })
// });