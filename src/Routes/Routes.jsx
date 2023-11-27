import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./privateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddApartments/AddApartments";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/paymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import ManageCoupon from "../Pages/Dashboard/ManageCoupons/ManageCoupon";
import Apartment from "../Pages/Apartment/Apartment";
import MakeAnnouncement from "../Pages/Dashboard/MakeAnnouncement/MakeAnnouncement";
import Announcement from "../Pages/Dashboard/Announcement/Announcement";
import MemberRoute from "./MemberRoute";
import MemberHome from "../Pages/Dashboard/MemberHome/MemberHome";
import AgreementRequest from "../Pages/Dashboard/AgreementRequests/AgreementRequest";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
          path:"apartment",
          element:<Apartment></Apartment>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'announcement',
        element:<Announcement></Announcement>
      },
      // member--------------------
      {
        path:'memberHome',
        element:<MemberRoute><MemberHome></MemberHome></MemberRoute>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // admin----------------------------
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'allUsers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'manageCoupon',
        element:<AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>
      },
      {
        path:'makeAnnouncement',
        element:<AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
      },
      {
        path:'agreementRequests',
        element:<AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>
      },
      {
        path:'addApartments',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      }
    ]
  }
]);
