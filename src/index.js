import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoApp from "./TodoApp";
// import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
