import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center gap-y-6">
          {/* Page content here */}
          <div className="w-full ms-1 lg:ms-10 mt-6 p-10 bg-primary text-white rounded-xl flex gap-14">
            <FaUserCircle className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-2xl">Hello Faysal</h1>
              <p>Role : Admin</p>
              <p>{formattedDate}</p>
            </div>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden text-white"
          >
            Open Menu
          </label>
          <Outlet />
        </div>
        <div className="drawer-side rounded-xl">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex items-center">
            {/* Sidebar content here */}
            <li>
              <Link
                className="text-xl hover:text-primary mt-6"
                to="/dashboard/myBookings"
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
