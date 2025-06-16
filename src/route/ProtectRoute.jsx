
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { currentUser } from "../api/AuthApi";
import { getAccessToken } from "../utils/LocalStorage";

const ProtectRoute = ({ element, allow }) => {
    const [isAllowed, setIsAllowed] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user, fetchUserData } = useAuth()
    const token = getAccessToken()
    // const user = JSON.parse(localStorage.getItem("user"))
    const checkRole = async () => {
        console.log(user, "USER")

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

    useEffect(() => {
        checkRole();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAllowed) {
        return <Navigate to="/unauthorization" />;
    }

    return element;
};

export default ProtectRoute;