import { useEffect, useState } from "react";
import {
    Package,
    Users,
    Building2,
    ClipboardList,
    Wrench,
    Boxes
} from "lucide-react";

import {
    assetAPI,
    employeeAPI,
    departmentAPI,
    maintenanceAPI
} from "../lib/axios";

export default function Dashboard(){

    const [stats,setStats]=useState({

        totalAssets:0,
        allocatedAssets:0,
        employees:0,
        departments:0,
        maintenance:0,
        availableAssets:0

    });

    useEffect(()=>{

        loadDashboard();

    },[]);

    async function loadDashboard(){

        try{

            const [

                assets,

                employees,

                departments,

                maintenance

            ]=await Promise.all([

                assetAPI.getAll(),

                employeeAPI.getAll(),

                departmentAPI.getAll(),

                maintenanceAPI.getAll()

            ]);

            const assetList=assets.data || [];

            const allocated=assetList.filter(

                a=>a.status==="Allocated"

            ).length;

            const maintenanceCount=assetList.filter(

                a=>a.status==="Maintenance"

            ).length;

            setStats({

                totalAssets:assetList.length,

                allocatedAssets:allocated,

                employees:(employees.data||[]).length,

                departments:(departments.data||[]).length,

                maintenance:(maintenance.data||[]).length,

                availableAssets:

                    assetList.length-

                    allocated-

                    maintenanceCount

            });

        }

        catch(error){

            console.log(error);

        }

    }

    const cards=[

        {

            title:"Total Assets",

            value:stats.totalAssets,

            icon:Package,

            color:"bg-blue-600"

        },

        {

            title:"Allocated",

            value:stats.allocatedAssets,

            icon:ClipboardList,

            color:"bg-green-600"

        },

        {

            title:"Employees",

            value:stats.employees,

            icon:Users,

            color:"bg-purple-600"

        },

        {

            title:"Departments",

            value:stats.departments,

            icon:Building2,

            color:"bg-orange-500"

        },

        {

            title:"Maintenance",

            value:stats.maintenance,

            icon:Wrench,

            color:"bg-red-600"

        },

        {

            title:"Available",

            value:stats.availableAssets,

            icon:Boxes,

            color:"bg-cyan-600"

        }

    ];

    return(

        <div className="space-y-8">

            <h1 className="text-3xl font-bold">

                Dashboard

            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {cards.map(card=>{

                    const Icon=card.icon;

                    return(

                        <div

                            key={card.title}

                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"

                        >

                            <div className="flex justify-between">

                                <div>

                                    <p className="text-gray-500">

                                        {card.title}

                                    </p>

                                    <h2 className="text-4xl font-bold mt-3">

                                        {card.value}

                                    </h2>

                                </div>

                                <div className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center`}>

                                    <Icon

                                        size={30}

                                        className="text-white"

                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}
