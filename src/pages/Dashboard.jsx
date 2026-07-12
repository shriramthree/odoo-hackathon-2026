import { useEffect, useState } from "react";
import {
    Package,
    Users,
    Building2,
    ClipboardList,
    Wrench,
    Boxes
} from "lucide-react";

import { dashboardAPI } from "../lib/axios";

export default function Dashboard() {

    const [stats, setStats] = useState({
        total_assets: 0,
        allocated_assets: 0,
        employees: 0,
        departments: 0,
        maintenance: 0,
        available_assets: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const res = await dashboardAPI.stats();

            const data = res.data || {};

            setStats({
                total_assets: data.total_assets || 0,
                allocated_assets: data.allocated_assets || 0,
                employees: data.employees || 0,
                departments: data.departments || 0,
                maintenance: data.maintenance || 0,
                available_assets: data.available_assets || 0
            });

        } catch (error) {

            console.log(error);

            setStats({
                total_assets: 0,
                allocated_assets: 0,
                employees: 0,
                departments: 0,
                maintenance: 0,
                available_assets: 0
            });

        } finally {

            setLoading(false);

        }

    };

    const cards = [

        {
            title: "Total Assets",
            value: stats.total_assets,
            icon: Package,
            color: "bg-blue-500"
        },

        {
            title: "Allocated Assets",
            value: stats.allocated_assets,
            icon: ClipboardList,
            color: "bg-green-500"
        },

        {
            title: "Employees",
            value: stats.employees,
            icon: Users,
            color: "bg-purple-500"
        },

        {
            title: "Departments",
            value: stats.departments,
            icon: Building2,
            color: "bg-orange-500"
        },

        {
            title: "Maintenance",
            value: stats.maintenance,
            icon: Wrench,
            color: "bg-red-500"
        },

        {
            title: "Available Assets",
            value: stats.available_assets,
            icon: Boxes,
            color: "bg-cyan-500"
        }

    ];

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-gray-500">
                    AssetFlow ERP Dashboard
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={card.title}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-gray-500">
                                        {card.title}
                                    </p>

                                    <h2 className="text-4xl font-bold mt-3">

                                        {loading ? "..." : card.value}

                                    </h2>

                                </div>

                                <div
                                    className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center`}
                                >

                                    <Icon
                                        className="text-white"
                                        size={30}
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-xl font-bold mb-4">
                        Recent Assets
                    </h2>

                    <p className="text-gray-500">
                        No assets available.
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-xl font-bold mb-4">
                        Recent Activities
                    </h2>

                    <p className="text-gray-500">
                        No recent activities.
                    </p>

                </div>

            </div>

        </div>

    );

}