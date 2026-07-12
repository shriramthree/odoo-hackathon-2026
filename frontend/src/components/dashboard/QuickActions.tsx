import Link from "next/link";

export default function QuickActions(){

const items=[
["New Asset","/dashboard/assets"],
["Allocate","/dashboard/allocation"],
["Maintenance","/dashboard/maintenance"],
["Reports","/dashboard/reports"]
];

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-bold mb-4">

Quick Actions

</h2>

<div className="grid grid-cols-2 gap-4">

{items.map(([title,link])=>(

<Link
key={title}
href={link}
className="rounded-lg bg-blue-600 text-white p-4 text-center hover:bg-blue-700"
>

{title}

</Link>

))}

</div>

</div>

)

}
