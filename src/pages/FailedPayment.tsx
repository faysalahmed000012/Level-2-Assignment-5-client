import { Link } from "react-router-dom";

const FailedPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl text-red-500 mt-10 mb-6">
        Payment Failed{" "}
      </h1>

      <Link className="px-6 py-3 rounded-xl bg-primary text-white" to="/">
        Return Home
      </Link>
    </div>
  );
};

export default FailedPayment;
