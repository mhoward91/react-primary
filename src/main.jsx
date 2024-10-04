import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { NavigationProvider } from "./context/navigation";

createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
