import { Link } from "react-router-dom";

const AdminGuard = () => {
  return (
    <div className="mt-10 mb-6">
      <h1 className="text-2xl text-center font-bold text-red-500">
        Your Are Not Authorized!
      </h1>
      <Link className="btn bg-red-500" to="/">
        Return Home
      </Link>
    </div>
  );
};

export default AdminGuard;
