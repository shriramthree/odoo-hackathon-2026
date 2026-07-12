import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Cell
} from "recharts";

const data=[

    {name:"Available",value:60},

    {name:"Allocated",value:140},

    {name:"Maintenance",value:25}

];

const colors=[

    "#2563eb",

    "#22c55e",

    "#f97316"

];

export default function CategoryChart(){

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">

                Asset Categories

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                    >

                        {data.map((_,index)=>

                            <Cell
                                key={index}
                                fill={colors[index]}
                            />

                        )}

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}
