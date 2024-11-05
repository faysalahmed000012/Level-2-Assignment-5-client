import { useAppSelector } from "../../../../redux/hooks";
import BookingStatistics from "./BookingTable";
import TotalFacility from "./TotalFacility";
import UserStatsDashboard from "./UserAdminsCharts";
import UsersCard from "./UsersCard";

const Statistics = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="w-full">
      {user?.role == "admin" ? (
        <>
          <BookingStatistics />
          <div className="md:flex gap-10 mt-10">
            <UserStatsDashboard />
            <div>
              <UsersCard />
              <TotalFacility />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Statistics;
