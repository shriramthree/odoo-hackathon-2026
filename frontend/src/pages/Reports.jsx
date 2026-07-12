import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area
} from "recharts";

const assetData = [
    { name: "Available", value: 80 },
    { name: "Allocated", value: 140 },
    { name: "Maintenance", value: 25 }
];

const monthlyData = [
    { month: "Jan", assets: 20 },
    { month: "Feb", assets: 35 },
    { month: "Mar", assets: 50 },
    { month: "Apr", assets: 62 },
    { month: "May", assets: 74 },
    { month: "Jun", assets: 88 }
];

const allocationData = [
    { name: "HR", value: 22 },
    { name: "IT", value: 40 },
    { name: "Finance", value: 14 },
    { name: "Admin", value: 11 },
    { name: "Sales", value: 19 }
];

const COLORS = [
    "#2563EB",
    "#22C55E",
    "#F97316",
    "#A855F7",
    "#06B6D4"
];

export default function Reports() {

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">
                    Reports Dashboard
                </h1>

                <p className="text-gray-500">
                    Asset Analytics & Reports
                </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">
                        Total Assets
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        245
                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">
                        Allocated
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-green-600">
                        180
                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">
                        Maintenance
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-orange-500">
                        25
                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">
                        Departments
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-blue-600">
                        12
                    </h2>

                </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-5">
                        Asset Status
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <PieChart>

                            <Pie
                                data={assetData}
                                dataKey="value"
                                outerRadius={110}
                            >

                                {assetData.map((_, index)=>

                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />

                                )}

                            </Pie>

                            <Tooltip/>

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-5">
                        Monthly Asset Growth
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <AreaChart data={monthlyData}>

                            <CartesianGrid strokeDasharray="3 3"/>

                            <XAxis dataKey="month"/>

                            <YAxis/>

                            <Tooltip/>

                            <Area
                                dataKey="assets"
                                stroke="#2563EB"
                                fill="#93C5FD"
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-5">
                        Department Allocation
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <BarChart
                            data={allocationData}
                        >

                            <CartesianGrid strokeDasharray="3 3"/>

                            <XAxis dataKey="name"/>

                            <YAxis/>

                            <Tooltip/>

                            <Bar
                                dataKey="value"
                                fill="#2563EB"
                                radius={[8,8,0,0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-5">
                        Report Summary
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between border-b pb-3">

                            <span>Total Employees</span>

                            <strong>86</strong>

                        </div>

                        <div className="flex justify-between border-b pb-3">

                            <span>Total Assets</span>

                            <strong>245</strong>

                        </div>

                        <div className="flex justify-between border-b pb-3">

                            <span>Allocated Assets</span>

                            <strong>180</strong>

                        </div>

                        <div className="flex justify-between border-b pb-3">

                            <span>Available Assets</span>

                            <strong>40</strong>

                        </div>

                        <div className="flex justify-between border-b pb-3">

                            <span>Maintenance</span>

                            <strong>25</strong>

                        </div>

                        <div className="flex justify-between">

                            <span>Departments</span>

                            <strong>12</strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
