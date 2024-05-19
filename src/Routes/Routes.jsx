import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";

import DashBoard from "../Pages/dashBoard/DashBoard";
import OurShope from "../Pages/OurShope/OurShope";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/ourMenu",
          element: <OurMenu></OurMenu>
        },
        {
          path: '/ourShope/:category',
          element: <OurShope></OurShope>
        },
        {
          path: '/dashBoard',
          element: <DashBoard></DashBoard>
        }
      ]
    },
  ]);
  