import { Plus, Users, Package, FileBarChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActions(){

    const actions=[

        {
            title:"New Asset",
            icon:Package,
            link:"/assets"
        },

        {
            title:"Employee",
            icon:Users,
            link:"/employees"
        },

        {
            title:"Allocate",
            icon:Plus,
            link:"/allocation"
        },

        {
            title:"Reports",
            icon:FileBarChart,
            link:"/reports"
        }

    ];

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-5">
                Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

                {actions.map((item)=>{

                    const Icon=item.icon;

                    return(

                        <Link

                            key={item.title}

                            to={item.link}

                            className="bg-blue-50 hover:bg-blue-100 rounded-xl p-5 flex flex-col items-center transition"

                        >

                            <Icon
                                className="text-blue-600 mb-3"
                                size={32}
                            />

                            <span className="font-semibold">
                                {item.title}
                            </span>

                        </Link>

                    );

                })}

            </div>

        </div>

    );

}
