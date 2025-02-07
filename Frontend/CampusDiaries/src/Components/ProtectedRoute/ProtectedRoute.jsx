import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContex/AuthContex";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Show a loader while checking auth

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
