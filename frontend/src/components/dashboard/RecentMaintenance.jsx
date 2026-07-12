export default function RecentMaintenance(){

    const tickets=[

        {
            id:1,
            asset:"Dell Latitude",
            issue:"Keyboard Replacement",
            priority:"High"
        },

        {
            id:2,
            asset:"Canon Printer",
            issue:"Paper Jam",
            priority:"Medium"
        },

        {
            id:3,
            asset:"HP EliteBook",
            issue:"Battery Change",
            priority:"Low"
        }

    ];

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-5">

                Recent Maintenance

            </h2>

            <div className="space-y-4">

                {tickets.map(ticket=>(

                    <div
                        key={ticket.id}
                        className="border rounded-lg p-4 hover:bg-slate-50 transition"
                    >

                        <h3 className="font-semibold">
                            {ticket.asset}
                        </h3>

                        <p className="text-gray-500 mt-1">
                            {ticket.issue}
                        </p>

                        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-white text-xs ${
                            ticket.priority==="High"
                            ?"bg-red-600"
                            :ticket.priority==="Medium"
                            ?"bg-orange-500"
                            :"bg-green-600"
                        }`}>

                            {ticket.priority}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}
