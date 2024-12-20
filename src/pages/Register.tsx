import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignUpMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
      phone: { value: string };
      address: { value: string };
    };
    const user = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      phone: target.phone.value,
      address: target.address.value,
    };
    try {
      await signUp(user);
      toast.success("registered successfully");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen rounded-lg">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join Us</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label>
                  <span>Full Name : </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    name="name"
                    type="text"
                    className="grow"
                    placeholder="John Doe"
                  />
                </label>
              </div>
              <div className="form-control">
                <label>
                  <span>Email : </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    name="email"
                    type="text"
                    className="grow"
                    placeholder="johndoe@gmail.com"
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  <span>Phone Number : </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                  </svg>
                  <input
                    name="phone"
                    type="text"
                    className="grow"
                    placeholder="01XXXXXXXX"
                  />
                </label>
              </div>
              <div className="form-control">
                <label>
                  <span>Password : </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    name="password"
                    type="password"
                    className="grow"
                    placeholder="******"
                  />
                </label>
              </div>
              <div className="form-control">
                <label>
                  <span>Address : </span>
                </label>
                <textarea
                  name="address"
                  className="textarea textarea-bordered"
                  placeholder="Address"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  Register
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt">
                  {" "}
                  Already have an Account ?
                </span>
                <Link to="/login" className="label-text-alt link link-hover">
                  Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
