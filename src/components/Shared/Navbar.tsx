import { LuUserCircle } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  return (
    <div className="navbar container mx-auto bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-secondary lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "inactive"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "inactive"
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            {!user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "inactive"
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/">
          <img className=" h-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "inactive"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "inactive"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          {!user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "inactive"
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <LuUserCircle className="w-10 h-10" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={() => dispatch(logout())}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-white font-bold  w-20 transition-all duration-300 ease-in-out transform hover:rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
