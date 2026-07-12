import { Search, Bell, UserCircle } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {

    const { user } = useAuth();

    return (

        <header className="bg-white h-16 px-6 shadow-sm border-b flex items-center justify-between">

            <div className="relative w-96">

                <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search assets, employees..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

            <div className="flex items-center gap-6">

                <button className="relative">

                    <Bell
                        size={22}
                        className="text-gray-700 hover:text-blue-600 transition"
                    />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        3
                    </span>

                </button>

                <div className="flex items-center gap-3">

                    <UserCircle
                        size={38}
                        className="text-blue-600"
                    />

                    <div>

                        <h3 className="font-semibold">
                            {user?.name || "Administrator"}
                        </h3>

                        <p className="text-xs text-gray-500">
                            {user?.email || "admin@assetflow.com"}
                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}
