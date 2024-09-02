import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import AdminGuard from "./AdminGuard";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  } else if (user?.role !== "admin") {
    return <AdminGuard />;
  }

  return children;
};

export default AdminRoute;
