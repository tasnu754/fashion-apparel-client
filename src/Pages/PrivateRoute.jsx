import { useContext } from "react";
import { AuthProvider } from "./firebaseAuth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);

    if (loading) {
         return <span className="loading loading-spinner text-success"></span>;
    }
    
    if (user) {
        return children;
    }
     
    return <Navigate to="/signin"></Navigate>
    

};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;