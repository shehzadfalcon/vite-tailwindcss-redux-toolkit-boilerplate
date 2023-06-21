import { Navigate } from "react-router-dom";

const PrivateRoute = ({}: any) => {
  return <Navigate to="/dashboard" />;
};

export default PrivateRoute;
