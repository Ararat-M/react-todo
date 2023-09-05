import { Layout } from "./components/Layout/Layout";
import { ToDoList } from "./components/ToDoList/ToDoList";
import "./index.scss";

export function App() {
  return (
    <Layout>
      <ToDoList />
    </Layout>
  );
}