import {
    Package,
    Users,
    Building2,
    ClipboardList,
    Wrench,
    Boxes
} from "lucide-react";

export default function Dashboard() {

    const stats = [
        {
            title: "Total Assets",
            value: 245,
            icon: Package,
            color: "bg-blue-500"
        },
        {
            title: "Allocated",
            value: 182,
            icon: ClipboardList,
            color: "bg-green-500"
        },
        {
            title: "Employees",
            value: 86,
            icon: Users,
            color: "bg-purple-500"
        },
        {
            title: "Departments",
            value: 12,
            icon: Building2,
            color: "bg-orange-500"
        },
        {
            title: "Maintenance",
            value: 18,
            icon: Wrench,
            color: "bg-red-500"
        },
        {
            title: "Available",
            value: 63,
            icon: Boxes,
            color: "bg-cyan-500"
        }
    ];

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="text-gray-500">
                    Welcome to AssetFlow ERP
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="bg-white rounded-xl shadow hover:shadow-xl transition p-6"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <p className="text-gray-500">
                                        {item.title}
                                    </p>

                                    <h2 className="text-4xl font-bold mt-2">
                                        {item.value}
                                    </h2>

                                </div>

                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                                >

                                    <Icon
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-4">
                        Recent Assets
                    </h2>

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="text-left py-2">
                                    Asset
                                </th>

                                <th className="text-left">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="border-b">

                                <td className="py-3">
                                    Dell Latitude 5440
                                </td>

                                <td>
                                    Allocated
                                </td>

                            </tr>

                            <tr className="border-b">

                                <td className="py-3">
                                    HP ProBook
                                </td>

                                <td>
                                    Available
                                </td>

                            </tr>

                            <tr>

                                <td className="py-3">
                                    Epson Printer
                                </td>

                                <td>
                                    Maintenance
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl mb-4">
                        Recent Activities
                    </h2>

                    <ul className="space-y-4">

                        <li className="border-l-4 border-blue-500 pl-4">
                            Laptop allocated to John
                        </li>

                        <li className="border-l-4 border-green-500 pl-4">
                            Printer returned
                        </li>

                        <li className="border-l-4 border-orange-500 pl-4">
                            Maintenance ticket raised
                        </li>

                        <li className="border-l-4 border-red-500 pl-4">
                            Asset audit completed
                        </li>

                    </ul>

                </div>

            </div>

        </div>

    );

}
