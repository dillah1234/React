import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  import ProductDetail from "./productDetail";
  import ProductList from "./itemList";
  import LoginPage from "./loginPage";
  import Protected from "./Protected";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/product",
      element: (
        <Protected>
          <ProductList />
        </Protected>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <Protected>
          <ProductDetail />
        </Protected>
      ),
    },
  ]);
  
  function AxioCard() {
    return <RouterProvider router={router} />;
  }
  
  export default AxioCard;