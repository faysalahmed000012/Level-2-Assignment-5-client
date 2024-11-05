import { useGetCurrentUserQuery } from "../../redux/features/user/user.api";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data } = useGetCurrentUserQuery({ email: user?.email });
  console.log(data?.data);
  const userData = data?.data;
  return (
    <div className="w-full ">
      {" "}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mx-20 max-w-[1400px]">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white font-bold text-2xl uppercase  mr-4 py-4 px-4 w-20 h-20 rounded-full flex items-center justify-center">
              {userData.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-medium">{userData.name}</h2>
          </div>
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-500 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{userData.phone}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-500 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{userData.email}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-500 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>{userData.role}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-500 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{userData.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
