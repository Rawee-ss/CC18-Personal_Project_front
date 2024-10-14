
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const ProtectRoute = ({ element, allow }) => {
    const [isAllowed, setIsAllowed] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()

    useEffect(() => {
        const checkRole = async () => {
            try {
                if (user) {
                    const role = user.role; 
                    setIsAllowed(allow.includes(role));
                } else {
                    setIsAllowed(false); 
                }
            } catch (err) {
                console.error("Error fetching role:", err);
                setIsAllowed(false);
            } finally {
                setLoading(false);
            }
        };

        checkRole();
    }, [allow, user]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    // if (!isAllowed) {
    //     return <Navigate to="/unauthorization" />;
    // }

    return element;
};

export default ProtectRoute;