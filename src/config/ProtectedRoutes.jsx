import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


//Check authenticated users
const ProtectedRoutes = () => {
    // const { userToken } = useSelector((state) => state.user);
    const isAuthen = true
    return (isAuthen ? <Outlet /> : <Navigate to="/login" />)
}

export default ProtectedRoutes;