import { fireEvent, render, screen } from "@testing-library/react"
import { Main } from "./Main";

jest.mock("nanoid", () => { return { nanoid: () => Math.floor(Math.random() * 1000) } })

describe("Main", () => {
  beforeEach(() => {
    render(<Main />)

    const inputElement = screen.getByTestId("input");
    const formElement = screen.getByTestId("form");
    
    fireEvent.change(inputElement, {target: {value: "new task"}});
    fireEvent.submit(formElement);

    fireEvent.change(inputElement, {target: {value: "new task 2"}});
    fireEvent.submit(formElement);

    fireEvent.change(inputElement, {target: {value: "new task 3"}});
    fireEvent.submit(formElement);
  })

  test("add ToDo", () => {
    const toDoitemElement = screen.getAllByTestId("toDoItem");
    const toDoTitleElement = screen.getAllByTestId("toDoTitle");

    expect(toDoitemElement[0]).toBeInTheDocument();
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
    render(<Main />)

    const inputElement = screen.getByTestId("input");
    const formElement = screen.getByTestId("form");
    
    fireEvent.change(inputElement, {target: {value: "new task"}});
    fireEvent.submit(formElement);

    fireEvent.change(inputElement, {target: {value: "new task 2"}});
    fireEvent.submit(formElement);

    fireEvent.change(inputElement, {target: {value: "new task 3"}});
    fireEvent.submit(formElement);

    const inputCheckboxElement = screen.getAllByTestId("checkbox");
    fireEvent.click(inputCheckboxElement[0]);
    fireEvent.click(inputCheckboxElement[2]);
  })
  
  test("render list \"all\"", () => {
    const btnElement = screen.getByTestId("btnAll");
    fireEvent.click(btnElement);

    const toDoitemElement = screen.getAllByTestId("toDoItem");
    expect(toDoitemElement.length).toBe(3)
  })

  test("render list \"active\"", () => {
    const btnElement = screen.getByTestId("btnActive");
    fireEvent.click(btnElement);

    const toDoitemElement = screen.getAllByTestId("toDoItem");
    expect(toDoitemElement.length).toBe(1)
  })

  test("render list \"completed\"", () => {
    const btnElement = screen.getByTestId("btnCompleted");
    fireEvent.click(btnElement);

    const toDoitemElement = screen.getAllByTestId("toDoItem");
    expect(toDoitemElement.length).toBe(2)
  })

  test("use button \"clear completed\"", () => {
    const btnElementClear = screen.getByTestId("btnClear");

    fireEvent.click(btnElementClear);
    expect(screen.getAllByTestId("toDoItem").length).toBe(1)
  })
});