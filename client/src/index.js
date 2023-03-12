import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import App_Dapp from "./App_Dapp";
import Search_App from "./Search_App";
import Favourite from "./Favourite";
import Display from "./components/Display";
import store from "./utils/store";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <App_Dapp />,
  },
  {
    path: "/dapp",
    element: (
      <Provider store={store}>
        <Search_App />
      </Provider>
    ),
    children: [
      {
        path: "search/:id",
        element: <Display />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
