import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import CreateAdmin from "./components/dashboard/admin/CreateAdmin.tsx";
import ManageFacilities from "./components/dashboard/admin/facility management/ManageFacilities.tsx";
import ManageBookings from "./components/dashboard/admin/ManageBookings.tsx";
import MyBookings from "./components/dashboard/user/MyBookings.tsx";
import "./index.css";
import About from "./pages/About.tsx";
import Bookings from "./pages/Bookings.tsx";
import Contact from "./pages/Contact.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Facilities from "./pages/Facilities.tsx";
import FacilityDetail from "./pages/FacilityDetail.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { persistor, store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetail />,
      },
      {
        path: "/booking/:id",
        element: <Bookings />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/myBookings",
            element: <MyBookings />,
          },
          {
            path: "/dashboard/manage/facilities",
            element: <ManageFacilities />,
          },
          {
            path: "/dashboard/manage/bookings",
            element: <ManageBookings />,
          },
          {
            path: "/dashboard/manage/admin",
            element: <CreateAdmin />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
