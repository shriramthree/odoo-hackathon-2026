import { createContext, useState, useEffect } from "react";
import { authAPI } from "../lib/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialize = async () => {
            const savedToken = localStorage.getItem("token");

            if (!savedToken) {
                setLoading(false);
                return;
            }

            try {
                const res = await authAPI.profile();

                setUser(res.data);
                setToken(savedToken);
            } catch (err) {
                console.error(err);

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                setUser(null);
                setToken(null);
            } finally {
                setLoading(false);
            }
        };

        initialize();
    }, []);

    const login = async (email, password) => {
        const res = await authAPI.login({
            email,
            password,
        });

        const accessToken =
            res.data.access_token ||
            res.data.token ||
            res.data.accessToken;

        if (!accessToken) {
            throw new Error("JWT token not returned by backend");
        }

        localStorage.setItem("token", accessToken);

        setToken(accessToken);

        try {
            const profile = await authAPI.profile();

            setUser(profile.data);

            localStorage.setItem(
                "user",
                JSON.stringify(profile.data)
            );
        } catch {
            setUser(null);
        }

        return res.data;
    };

    const register = async (payload) => {
        return await authAPI.register(payload);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);
        setToken(null);

        window.location.href = "/login";
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                register,
                logout,
                authenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
