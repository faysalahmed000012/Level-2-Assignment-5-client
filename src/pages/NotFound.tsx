import { Link } from "react-router-dom";
import notFound from "../assets/images/notFound.webp";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-6">Page Not Found!</h1>
      <img src={notFound} className="" alt="not found" />
      <Link to="/" className="btn bg-purple-500 text-white">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
