import { App } from "./App";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "store";

const rootNode = document.getElementById("root");

if(rootNode != null) {
  const root = createRoot(rootNode);
  root.render(
      <StoreProvider>
        <App/>
      </StoreProvider>
  );
}