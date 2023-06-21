import { Navigate } from "react-router-dom";

const ProtectedRoute = ({}: any) => {
  return <Navigate to="/dashboard" />;
};

export default ProtectedRoute;
