export default function Activity(){

const logs=[
"Asset Allocated",
"Maintenance Completed",
"Employee Added",
"Department Updated"
];

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-bold">

Recent Activity

</h2>

<div className="space-y-3 mt-4">

{logs.map(log=>(

<div
key={log}
className="border-b pb-2"
>

{log}

</div>

))}

</div>

</div>

)

}
