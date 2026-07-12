"use client";

import {
PieChart,
Pie,
Cell,
ResponsiveContainer
} from "recharts";

const data=[
{name:"IT",value:20},
{name:"Office",value:10},
{name:"Furniture",value:5},
{name:"Others",value:8},
];

const colors=[
"#3b82f6",
"#22c55e",
"#f59e0b",
"#ef4444"
];

export default function CategoryChart(){

return(

<div className="bg-white rounded-xl shadow p-6 h-80">

<ResponsiveContainer>

<PieChart>

<Pie
data={data}
dataKey="value"
outerRadius={100}
>

{data.map((_,i)=>(

<Cell
key={i}
fill={colors[i]}
/>

))}

</Pie>

</PieChart>

</ResponsiveContainer>

</div>

)

}
