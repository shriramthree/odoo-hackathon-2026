import {
    LayoutDashboard,
    Building2,
    Users,
    Boxes,
    ClipboardList,
    Wrench,
    BarChart3,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Sidebar() {

    const { logout } = useAuth();

    const [collapsed, setCollapsed] = useState(false);

    const menus = [

        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard"
        },

        {
            title: "Departments",
            icon: Building2,
            path: "/departments"
        },

        {
            title: "Employees",
            icon: Users,
            path: "/employees"
        },

        {
            title: "Assets",
            icon: Boxes,
            path: "/assets"
        },

        {
            title: "Allocation",
            icon: ClipboardList,
            path: "/allocation"
        },

        {
            title: "Maintenance",
            icon: Wrench,
            path: "/maintenance"
        },

        {
            title: "Reports",
            icon: BarChart3,
            path: "/reports"
        },

        {
            title: "Settings",
            icon: Settings,
            path: "/settings"
        }

    ];

    return (

        <aside
            className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
                collapsed ? "w-20" : "w-64"
            }`}
        >

            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">

                {!collapsed && (
                    <h1 className="text-xl font-bold text-blue-400">
                        AssetFlow
                    </h1>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded hover:bg-slate-800"
                >
                    {collapsed ? <ChevronRight /> : <ChevronLeft />}
                </button>

            </div>

            <nav className="flex-1 mt-5">

                {menus.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `mx-3 mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                                    isActive
                                        ? "bg-blue-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >

                            <Icon size={20} />

                            {!collapsed && (
                                <span>{item.title}</span>
                            )}

                        </NavLink>

                    );

                })}

            </nav>

            <div className="p-4 border-t border-slate-700">

                <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-3 transition"
                >

                    <LogOut size={20} />

                    {!collapsed && "Logout"}

                </button>

            </div>

        </aside>

    );

}
