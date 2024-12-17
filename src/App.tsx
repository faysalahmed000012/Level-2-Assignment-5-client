import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Shared/Footer";
import GoToTop from "./components/Shared/GoToTop";
import Navbar from "./components/Shared/Navbar";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="mx-[20px] lg:mx-[80px] mx-10px">
      <Navbar />
      <Outlet />
      <GoToTop />
      {!isDashboard && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
