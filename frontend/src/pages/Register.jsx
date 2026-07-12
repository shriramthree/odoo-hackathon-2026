import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";

export default function Register() {

    const navigate = useNavigate();
    const { register } = useAuth();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);

        try {

            await register({
                name: form.name,
                email: form.email,
                password: form.password
            });

            toast.success("Registration Successful");

            navigate("/login");

        } catch (err) {

            toast.error(
                err.response?.data?.detail ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    AssetFlow ERP
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Create your account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                        placeholder="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg py-3 font-semibold"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>

                </form>

                <div className="text-center mt-6">

                    <span className="text-gray-500">
                        Already have an account?
                    </span>

                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold ml-2"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>

    );

}
