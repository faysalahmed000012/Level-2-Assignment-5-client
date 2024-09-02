import { Link, useParams } from "react-router-dom";

const SuccessPayment = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl text-green-500">
        Payment Successful{" "}
      </h1>
      <p className="my-6">Transaction Id : {id} </p>
      <Link
        className="px-6 py-3 rounded-xl bg-primary text-white"
        to="/dashboard/myBookings"
      >
        My Bookings
      </Link>
    </div>
  );
};

export default SuccessPayment;
