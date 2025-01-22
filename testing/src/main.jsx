import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { DeliveryStatus, Greeting, Notification } from "./m5/finaly.jsx";
import RenderingList from "./m6/Try.jsx";
import UserList from "./m6/praktek.jsx";
import Card from "./m6/RenderingList/fragments/Card.jsx";
// import App from "./m6/RenderingList/fragments/App.jsx";
import Event from "./m7/try.jsx";
import PreventDefaultExample from "./m7/praktek.jsx";
import EventPropagationExample from "./m7/praktek2.jsx";
import ShowAlert from "./m7/praktek3.jsx";
import SimpleClick from "./m7/praktek4.jsx";
// import Counter from "./m8/number.jsx";
import ItemList from "./m8/array.jsx";
// import Counter from "./m8/praktek1.jsx";
import LoginStatus from "./m8/praktek2.jsx";
import SimpleCalculator from "./m8/praktek3.jsx";
import SimpleNameList from "./m9/Array.jsx";
import UpdateStateWithMap from "./m9/Map.jsx";
import ProductList from "./m9/soal1.jsx";
// import Counter from "./m10/noeffect.jsx";
import WithDependency from "./m10/withEffect.jsx";
import Counter from "./m10/s1.jsx";
import CountLogger from "./m10/s2.jsx";
import TextLogger from "./m10/s3.jsx";
// import Statusbar, { useOnlineStatus } from "./m11/Hooks.jsx";
import useTheme from "./m11/s1.jsx";
import ToggleTheme from "./m11/s1.jsx";
import TaskStatusComponent from "./m11/cabang s2.jsx";
// import HomePage from "./m12/privite.jsx";
import Home from "./m12/LinkTo.jsx";
// import HomePage from "./m12/s3.jsx";
import Navigation from "./m12/s3.jsx";
import HomePage from "./m12/s4.jsx";
import DashboardPage from "./m12/s5.jsx";
import NotFoundPage from "./m12/s2.jsx";
// import CobaAxios from "./m13/s1.jsx";
// import App from "./m13/s2.jsx";
import ToggleSwitch from "./m11/s1.jsx";
import DetailPage from "./m14/UseParams.jsx";
// import App from "./m14/UseParams2.jsx";
import CobaAxios from "./m13/Axios.jsx";
import CobaUseParams from "./m14/UseParams.jsx";
import PostDetail from "./m14/ApiDinamis.jsx";
// import BookList from "./m14/s1.jsx";
// import BookDetail from "./m14/s1pt2.jsx";
// import App2 from "./m14/s1pt3.jsx";
// import App3 from "./m14/app3.jsx";
// import DetailProducts from "./m14/s2.jsx";
// import { BooksDetail, MapBooks } from "./m14/soal 1/components.jsx";
import App from "./m14/soal 2/app.jsx";
import { BookCard, BooksDetail, MapBooks } from "./m14/soal 1/components.jsx";








   

  




createRoot(document.getElementById("root")).render(
  <StrictMode>  
    < MapBooks />
  </StrictMode>
);
