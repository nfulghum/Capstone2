import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../components/Auth/UserContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to='/login' replace />;
    }

    return children;
}

export default ProtectedRoute;


// localStorage and then reroute to users previous link