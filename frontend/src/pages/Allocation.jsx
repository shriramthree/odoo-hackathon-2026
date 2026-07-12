import { useEffect, useState } from "react";
import { allocationAPI } from "../lib/axios";
import { Plus, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function Allocation() {

    const emptyForm = {
        asset_id: "",
        employee_id: "",
        expected_return: ""
    };

    const [allocations, setAllocations] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [showModal, setShowModal] = useState(false);

    const loadData = async () => {
        try {
            const res = await allocationAPI.getAll();
            setAllocations(res.data);
        } catch {
            toast.error("Unable to load allocation history");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const allocateAsset = async () => {

        try {

            await allocationAPI.allocate(form);

            toast.success("Asset Allocated Successfully");

            setShowModal(false);

            setForm(emptyForm);

            loadData();

        } catch {

            toast.error("Allocation Failed");

        }

    };

    const returnAsset = async (id) => {

        if (!window.confirm("Return this asset?"))
            return;

        try {

            await allocationAPI.returnAsset(id);

            toast.success("Asset Returned");

            loadData();

        } catch {

            toast.error("Unable to return asset");

        }

    };

    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Asset Allocation
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex gap-2 items-center"
                >

                    <Plus size={18}/>

                    Allocate Asset

                </button>

            </div>

            <div className="bg-white rounded-xl shadow overflow-auto">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Asset
                            </th>

                            <th>
                                Employee
                            </th>

                            <th>
                                Allocated Date
                            </th>

                            <th>
                                Return Date
                            </th>

                            <th>
                                Status
                            </th>

                            <th>
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {allocations.map((item)=>(

                            <tr
                                key={item.id}
                                className="border-b hover:bg-slate-50"
                            >

                                <td className="p-3">
                                    {item.asset_name}
                                </td>

                                <td>
                                    {item.employee_name}
                                </td>

                                <td>
                                    {item.allocated_date}
                                </td>

                                <td>
                                    {item.expected_return}
                                </td>

                                <td>

                                    <span
                                        className={`px-3 py-1 rounded-full text-white text-sm ${
                                            item.status==="Returned"
                                            ? "bg-green-600"
                                            : "bg-orange-500"
                                        }`}
                                    >
                                        {item.status}
                                    </span>

                                </td>

                                <td>

                                    {item.status!=="Returned" && (

                                        <button
                                            onClick={()=>
                                                returnAsset(item.id)
                                            }
                                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                                        >

                                            <RotateCcw size={16}/>

                                            Return

                                        </button>

                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {showModal && (

                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

                    <div className="bg-white rounded-xl p-6 w-[500px] space-y-4">

                        <h2 className="text-2xl font-bold">
                            Allocate Asset
                        </h2>

                        <input
                            placeholder="Asset ID"
                            className="border p-3 rounded-lg w-full"
                            value={form.asset_id}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    asset_id:e.target.value
                                })
                            }
                        />

                        <input
                            placeholder="Employee ID"
                            className="border p-3 rounded-lg w-full"
                            value={form.employee_id}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    employee_id:e.target.value
                                })
                            }
                        />

                        <input
                            type="date"
                            className="border p-3 rounded-lg w-full"
                            value={form.expected_return}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    expected_return:e.target.value
                                })
                            }
                        />

                        <div className="flex justify-end gap-3">

                            <button
                                onClick={()=>
                                    setShowModal(false)
                                }
                                className="bg-gray-300 px-5 py-2 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={allocateAsset}
                                className="bg-blue-600 text-white px-5 py-2 rounded"
                            >
                                Allocate
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}
