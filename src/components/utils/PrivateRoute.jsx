import { Navigate } from "react-router-dom";
import useStore from "../../store";
import { Component } from "react";

const PrivateRoute = ({Component}) => {
    const { isLoggedIn } = useStore();
    return !isLoggedIn ? <Navigate to= "/" replace /> : <Component/>;

};

export default PrivateRoute;