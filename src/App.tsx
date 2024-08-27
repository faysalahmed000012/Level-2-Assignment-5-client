import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="mx-[20px] lg:mx-[80px] mx-10px">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
