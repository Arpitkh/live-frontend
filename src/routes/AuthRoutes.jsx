import { Route } from "react-router-dom";
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AuthRoutes = [
    <Route key="login" path="/" element={<Login />} />,
    <Route key="signup" path="/signup" element={<Signup />} />
];

export default AuthRoutes;
