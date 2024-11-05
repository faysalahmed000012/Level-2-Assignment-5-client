import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminCredential = () => {
    setEmail("faysal000012@gmail.com");
    setPassword("faysalAhmed");
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const userInfo = {
        email,
        password,
      };
      const res = await login(userInfo);
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));

      navigate("/");
      toast.success("Logged in successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen rounded-lg">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div>
            <button
              onClick={handleAdminCredential}
              className="btn btn-primary text-white"
            >
              Admin Credential
            </button>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  Login
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt">
                  {" "}
                  Do not have an Account ?
                </span>
                <Link to="/register" className="label-text-alt link link-hover">
                  Register
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
