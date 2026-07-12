import { useState } from "react";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";
import {
    User,
    Lock,
    Moon,
    Sun,
    Save,
    LogOut
} from "lucide-react";

export default function Settings() {

    const { user, logout } = useAuth();

    const [profile, setProfile] = useState({
        name: user?.name || "",
        email: user?.email || ""
    });

    const [password, setPassword] = useState({
        current: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [darkMode, setDarkMode] = useState(false);

    const saveProfile = () => {
        toast.success("Profile Updated Successfully");
    };

    const changePassword = () => {

        if (password.newPassword !== password.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        toast.success("Password Updated");

        setPassword({
            current: "",
            newPassword: "",
            confirmPassword: ""
        });

    };

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">
                    Settings
                </h1>

                <p className="text-gray-500">
                    Manage your account preferences
                </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex items-center gap-3 mb-5">

                        <User className="text-blue-600"/>

                        <h2 className="text-xl font-bold">
                            Profile
                        </h2>

                    </div>

                    <div className="space-y-4">

                        <input
                            className="border rounded-lg p-3 w-full"
                            placeholder="Name"
                            value={profile.name}
                            onChange={(e)=>
                                setProfile({
                                    ...profile,
                                    name:e.target.value
                                })
                            }
                        />

                        <input
                            className="border rounded-lg p-3 w-full"
                            placeholder="Email"
                            value={profile.email}
                            onChange={(e)=>
                                setProfile({
                                    ...profile,
                                    email:e.target.value
                                })
                            }
                        />

                        <button
                            onClick={saveProfile}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                        >

                            <Save size={18}/>

                            Save Profile

                        </button>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex items-center gap-3 mb-5">

                        <Lock className="text-orange-500"/>

                        <h2 className="text-xl font-bold">
                            Change Password
                        </h2>

                    </div>

                    <div className="space-y-4">

                        <input
                            type="password"
                            placeholder="Current Password"
                            className="border rounded-lg p-3 w-full"
                            value={password.current}
                            onChange={(e)=>
                                setPassword({
                                    ...password,
                                    current:e.target.value
                                })
                            }
                        />

                        <input
                            type="password"
                            placeholder="New Password"
                            className="border rounded-lg p-3 w-full"
                            value={password.newPassword}
                            onChange={(e)=>
                                setPassword({
                                    ...password,
                                    newPassword:e.target.value
                                })
                            }
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="border rounded-lg p-3 w-full"
                            value={password.confirmPassword}
                            onChange={(e)=>
                                setPassword({
                                    ...password,
                                    confirmPassword:e.target.value
                                })
                            }
                        />

                        <button
                            onClick={changePassword}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
                        >
                            Update Password
                        </button>

                    </div>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-bold mb-6">
                    Preferences
                </h2>

                <div className="flex justify-between items-center mb-6">

                    <div className="flex items-center gap-3">

                        {darkMode ? (
                            <Moon className="text-blue-600"/>
                        ) : (
                            <Sun className="text-yellow-500"/>
                        )}

                        <span className="font-medium">
                            Dark Mode
                        </span>

                    </div>

                    <button
                        onClick={()=>setDarkMode(!darkMode)}
                        className={`w-14 h-8 rounded-full transition ${
                            darkMode
                                ? "bg-blue-600"
                                : "bg-gray-300"
                        }`}
                    >

                        <div
                            className={`bg-white w-6 h-6 rounded-full mt-1 transition ${
                                darkMode
                                    ? "ml-7"
                                    : "ml-1"
                            }`}
                        />

                    </button>

                </div>

                <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg flex gap-2 items-center"
                >

                    <LogOut size={18}/>

                    Logout

                </button>

            </div>

        </div>

    );

}
