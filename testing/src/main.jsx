import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { DeliveryStatus, Greeting, Notification } from "./m5/finaly.jsx";
import RenderingList from "./m6/Try.jsx";
import UserList from "./m6/praktek.jsx";
import Card from "./m6/RenderingList/fragments/Card.jsx";
import App from "./m6/RenderingList/fragments/App.jsx";
import Event from "./m7/try.jsx";
import PreventDefaultExample from "./m7/praktek.jsx";
import EventPropagationExample from "./m7/praktek2.jsx";
import ShowAlert from "./m7/praktek3.jsx";
import SimpleClick from "./m7/praktek4.jsx";
// import Counter from "./m8/number.jsx";
import ItemList from "./m8/array.jsx";
import Counter from "./m8/praktek1.jsx";
import LoginStatus from "./m8/praktek2.jsx";
import SimpleCalculator from "./m8/praktek3.jsx";
import SimpleNameList from "./m9/Array.jsx";
import UpdateStateWithMap from "./m9/Map.jsx";
import ProductList from "./m9/soal1.jsx";

   

  




createRoot(document.getElementById("root")).render(
  <StrictMode> 
    < ProductList/>
  </StrictMode>
);
