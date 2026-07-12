"use client";

import{
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis
}from"recharts";

const data=[
{name:"Mon",value:3},
{name:"Tue",value:5},
{name:"Wed",value:8},
{name:"Thu",value:2},
{name:"Fri",value:6},
];

export default function AllocationChart(){

return(

<div className="bg-white rounded-xl shadow p-6 h-80">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Bar dataKey="value"/>

</BarChart>

</ResponsiveContainer>

</div>

)

}
