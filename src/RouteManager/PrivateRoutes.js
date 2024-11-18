import { Outlet, Navigate } from "react-router-dom";
var Token = localStorage.getItem("token") ?? "hello";
const PrivateRoutes = () => {
    return Token !== null ? <Outlet /> : <Navigate to="/GuestPage" />;
};
export default PrivateRoutes;