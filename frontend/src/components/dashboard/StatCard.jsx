export default function StatCard({

    title,
    value,
    icon,
    color

}){

    const Icon = icon;

    return(

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

            <div className="flex justify-between">

                <div>

                    <p className="text-gray-500">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {value}
                    </h2>

                </div>

                <div
                    className={`${color} w-16 h-16 rounded-xl flex items-center justify-center`}
                >

                    <Icon
                        size={30}
                        className="text-white"
                    />

                </div>

            </div>

        </div>

    );

}
