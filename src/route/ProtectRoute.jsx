
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { currentUser } from "../api/AuthApi";
import { getAccessToken } from "../untils/LocalStorage";

const ProtectRoute = ({ element, allow }) => {
    const [isAllowed, setIsAllowed] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user, fetchUserData } = useAuth()
    const token = getAccessToken()

    useEffect(() => {
        const checkRole = async () => {
            try {
                if (user) {
                    const role = user.role;
                    console.log(role, allow.includes(role))
                    setIsAllowed(allow.includes(role));
                } else {
                    const resp = await currentUser(token)
                    const role = resp.data.member.role
                    setIsAllowed(allow.includes(role));
                }
            } catch (err) {
                console.error("Error fetching role:", err);
                setIsAllowed(false);
            } finally {
                setLoading(false);
            }
        };

        checkRole();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(isAllowed)
    if (!isAllowed) {
        return <Navigate to="/unauthorization" />;
    }

    return element;
};

export default ProtectRoute;