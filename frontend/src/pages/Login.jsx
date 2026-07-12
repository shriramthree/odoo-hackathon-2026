import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await login(form.email, form.password);

            toast.success("Login Successful");

            navigate("/dashboard");

        } catch (err) {

            toast.error(
                err.response?.data?.detail ||
                "Invalid Credentials"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
                    AssetFlow ERP
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Login to continue
                </p>

                <form
                    onSubmit={submit}
                    className="space-y-5"
                >

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={change}
                        required
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={change}
                        required
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>

                </form>

                <div className="mt-6 text-center">

                    <span className="text-gray-500">
                        Don't have an account?
                    </span>

                    <Link
                        to="/register"
                        className="ml-2 text-blue-600 font-semibold"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>

    );

}
