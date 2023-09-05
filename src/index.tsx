import { App } from "./App";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root");

if(rootNode != null) {
  const root = createRoot(rootNode);
  root.render(
    <App/>
  );
}