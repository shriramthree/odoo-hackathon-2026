import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data=[

    {dept:"IT",assets:42},

    {dept:"HR",assets:18},

    {dept:"Admin",assets:28},

    {dept:"Sales",assets:34},

    {dept:"Finance",assets:21}

];

export default function AllocationChart(){

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">

                Department Allocation

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="dept"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="assets"
                        fill="#2563eb"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}
