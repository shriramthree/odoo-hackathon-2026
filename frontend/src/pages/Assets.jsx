import { useEffect, useState } from "react";
import { assetAPI } from "../lib/axios";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export default function Assets() {

    const [assets, setAssets] = useState([]);
    const [search, setSearch] = useState("");

    const loadAssets = async () => {
        try {
            const res = await assetAPI.getAll();
            setAssets(res.data);
        } catch {
            toast.error("Failed to load assets");
        }
    };

    useEffect(() => {
        loadAssets();
    }, []);

    const deleteAsset = async (id) => {

        if (!window.confirm("Delete Asset?")) return;

        try {

            await assetAPI.delete(id);

            toast.success("Asset Deleted");

            loadAssets();

        } catch {

            toast.error("Delete Failed");

        }

    };

    const filtered = assets.filter((asset) =>
        Object.values(asset)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Assets
                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                    <Plus size={18} />

                    Add Asset

                </button>

            </div>

            <div className="relative">

                <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                />

                <input
                    className="border rounded-lg w-full pl-10 p-3"
                    placeholder="Search Assets..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>

            <div className="bg-white rounded-xl shadow overflow-auto">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filtered.map((asset)=>(
                            <tr
                                key={asset.id}
                                className="border-b hover:bg-slate-50"
                            >

                                <td className="p-3">
                                    {asset.id}
                                </td>

                                <td>
                                    {asset.name}
                                </td>

                                <td>
                                    {asset.category}
                                </td>

                                <td>
                                    {asset.status}
                                </td>

                                <td>

                                    <div className="flex gap-3">

                                        <button className="text-blue-600">

                                            <Pencil size={18}/>

                                        </button>

                                        <button
                                            onClick={()=>deleteAsset(asset.id)}
                                            className="text-red-600"
                                        >

                                            <Trash2 size={18}/>

                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}
