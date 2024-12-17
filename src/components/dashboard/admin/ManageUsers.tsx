import { toast } from "react-toastify";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetCurrentUserQuery,
} from "../../../redux/features/user/user.api";
import { useAppSelector } from "../../../redux/hooks";
import { TUser } from "../../../types";

const ManageUsers = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const user = useAppSelector((state) => state.auth.user);
  const { data: currentUser } = useGetCurrentUserQuery({ email: user?.email });

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "admin":
        return "badge-success";
      case "user":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };
  const handleDelete = async (userId: string) => {
    if (confirm("Are you sure you want to remove this user ?")) {
      const res = await deleteUser(userId);
      if (res?.data?.success) {
        toast.success("User Removed Successfully");
      }
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Manage All Users</h1>
          <p className="text-base-content/70">Manage all users</p>
        </div>

        {/* Stats */}
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">{data?.data?.length}</div>
          </div>
        </div>
      </div>

      <div className=" overflow-auto max-h-[60vh]  bg-base-100 rounded-lg shadow">
        <table className="table table-zebra">
          <thead className="sticky top-0 left-0 bg-white">
            <tr>
              <th>Name</th>
              <th>Email </th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="">
            {data?.data?.map((user: TUser) => (
              <tr key={user._id} className="hover">
                <td>
                  <div className="font-medium">{user.name}</div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-base-content/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h16v16H4V4zm16 2l-8 6-8-6"
                      />
                    </svg>

                    <span>{user.email}</span>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-base-content/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h2a2 2 0 012 1.72l1.1 5.5a2 2 0 01-.4 1.72l-1.72 1.72a16.97 16.97 0 007.78 7.78l1.72-1.72a2 2 0 011.72-.4l5.5 1.1A2 2 0 0119 19v2a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z"
                      />
                    </svg>

                    <span>{user.phone}</span>
                  </div>
                </td>

                <td>
                  <div
                    className={`badge text-white ${getRoleBadgeClass(
                      user.role === "admin" ? "admin" : "user"
                    )} gap-2`}
                  >
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    {user.role === "admin" ? "admin" : "user"}
                  </div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      disabled={user._id === currentUser?.data?._id}
                      onClick={() => handleDelete(user._id as string)}
                      className="btn btn-error text-white btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn btn-sm">«</button>
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">»</button>
        </div>
      </div> */}
    </div>
  );
};

export default ManageUsers;
