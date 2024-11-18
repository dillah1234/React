import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { DeliveryStatus, Greeting, Notification } from "./m5/finaly.jsx";







createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DeliveryStatus status="delivered" />
  </StrictMode>
);
