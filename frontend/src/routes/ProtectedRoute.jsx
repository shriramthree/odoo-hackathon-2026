import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {

    const { authenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-100">
                <div className="text-center">
                    <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 font-medium">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
