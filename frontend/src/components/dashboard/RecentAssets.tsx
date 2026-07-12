export default function RecentAssets(){

const data=[
"HP Laptop",
"Dell Monitor",
"Canon Printer",
"Projector"
];

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-bold text-xl mb-4">

Recent Assets

</h2>

{data.map(asset=>(

<div
key={asset}
className="border-b py-3"
>

{asset}

</div>

))}

</div>

)

}
