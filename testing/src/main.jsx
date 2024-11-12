import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";



import Greeting from "./m3/greeating.jsx";
;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting  />
  </StrictMode>
);
