export default function RecentAssets(){

    const assets=[

        {
            id:1,
            name:"Dell Latitude",
            status:"Allocated"
        },

        {
            id:2,
            name:"HP EliteBook",
            status:"Available"
        },

        {
            id:3,
            name:"Canon Printer",
            status:"Maintenance"
        }

    ];

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">

                Recent Assets

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">
                            Asset
                        </th>

                        <th className="text-left">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {assets.map(asset=>(

                        <tr
                            key={asset.id}
                            className="border-b hover:bg-slate-50"
                        >

                            <td className="py-3">
                                {asset.name}
                            </td>

                            <td>

                                <span className={`px-3 py-1 rounded-full text-white text-sm ${
                                    asset.status==="Allocated"
                                    ? "bg-blue-600"
                                    : asset.status==="Available"
                                    ? "bg-green-600"
                                    : "bg-orange-500"
                                }`}>

                                    {asset.status}

                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}
