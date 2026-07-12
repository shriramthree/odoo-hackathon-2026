import {
    Package,
    Users,
    Wrench,
    ClipboardList
} from "lucide-react";

export default function Activity(){

    const activities=[

        {
            id:1,
            icon:Package,
            title:"Laptop Allocated",
            desc:"Dell Latitude assigned to John",
            color:"text-blue-600"
        },

        {
            id:2,
            icon:Users,
            title:"New Employee",
            desc:"David joined IT Department",
            color:"text-green-600"
        },

        {
            id:3,
            icon:Wrench,
            title:"Maintenance",
            desc:"Printer service completed",
            color:"text-orange-500"
        },

        {
            id:4,
            icon:ClipboardList,
            title:"Audit Finished",
            desc:"Inventory audit completed",
            color:"text-purple-600"
        }

    ];

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-5">

                Recent Activity

            </h2>

            <div className="space-y-5">

                {activities.map(item=>{

                    const Icon=item.icon;

                    return(

                        <div
                            key={item.id}
                            className="flex gap-4 items-start"
                        >

                            <div className={`${item.color} bg-slate-100 rounded-full p-3`}>

                                <Icon size={20}/>

                            </div>

                            <div>

                                <h4 className="font-semibold">
                                    {item.title}
                                </h4>

                                <p className="text-gray-500 text-sm">
                                    {item.desc}
                                </p>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}
