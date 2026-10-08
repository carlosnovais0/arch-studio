import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import "./index.css"

// A transição entre páginas controla a rolagem; o navegador não deve restaurá-la por conta própria.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
