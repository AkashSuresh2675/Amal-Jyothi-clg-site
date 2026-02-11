import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Replace with a proper loader component later
    }

    return user ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
