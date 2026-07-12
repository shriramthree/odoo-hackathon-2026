import { useEffect, useState } from "react";
import { maintenanceAPI } from "../lib/axios";
import { Plus, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Maintenance() {

    const emptyTicket = {
        asset_id: "",
        issue: "",
        priority: "Medium"
    };

    const [tickets, setTickets] = useState([]);
    const [ticket, setTicket] = useState(emptyTicket);
    const [showModal, setShowModal] = useState(false);

    const loadTickets = async () => {

        try {

            const res = await maintenanceAPI.getAll();

            setTickets(res.data);

        } catch {

            toast.error("Unable to load maintenance tickets");

        }

    };

    useEffect(() => {

        loadTickets();

    }, []);

    const raiseTicket = async () => {

        try {

            await maintenanceAPI.create(ticket);

            toast.success("Maintenance Ticket Created");

            setTicket(emptyTicket);

            setShowModal(false);

            loadTickets();

        } catch {

            toast.error("Unable to create ticket");

        }

    };

    const completeTicket = async (id) => {

        if (!window.confirm("Mark this ticket as completed?"))
            return;

        try {

            await maintenanceAPI.complete(id);

            toast.success("Ticket Completed");

            loadTickets();

        } catch {

            toast.error("Operation Failed");

        }

    };

    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Maintenance
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex gap-2 items-center"
                >

                    <Plus size={18} />

                    Raise Ticket

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
                                Issue
                            </th>

                            <th>
                                Priority
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

                        {tickets.map((item)=>(

                            <tr
                                key={item.id}
                                className="border-b hover:bg-slate-50"
                            >

                                <td className="p-3">
                                    {item.asset_name}
                                </td>

                                <td>
                                    {item.issue}
                                </td>

                                <td>

                                    <span
                                        className={`px-3 py-1 rounded-full text-white text-sm ${
                                            item.priority==="High"
                                            ? "bg-red-600"
                                            : item.priority==="Medium"
                                            ? "bg-orange-500"
                                            : "bg-green-600"
                                        }`}
                                    >
                                        {item.priority}
                                    </span>

                                </td>

                                <td>

                                    <span
                                        className={`px-3 py-1 rounded-full text-white text-sm ${
                                            item.status==="Completed"
                                            ? "bg-green-600"
                                            : "bg-blue-600"
                                        }`}
                                    >
                                        {item.status}
                                    </span>

                                </td>

                                <td>

                                    {item.status!=="Completed" && (

                                        <button
                                            onClick={()=>
                                                completeTicket(item.id)
                                            }
                                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center gap-2"
                                        >

                                            <CheckCircle size={16}/>

                                            Complete

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
                            Raise Maintenance Ticket
                        </h2>

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Asset ID"
                            value={ticket.asset_id}
                            onChange={(e)=>
                                setTicket({
                                    ...ticket,
                                    asset_id:e.target.value
                                })
                            }
                        />

                        <textarea
                            rows="4"
                            className="border p-3 rounded-lg w-full"
                            placeholder="Issue Description"
                            value={ticket.issue}
                            onChange={(e)=>
                                setTicket({
                                    ...ticket,
                                    issue:e.target.value
                                })
                            }
                        />

                        <select
                            className="border p-3 rounded-lg w-full"
                            value={ticket.priority}
                            onChange={(e)=>
                                setTicket({
                                    ...ticket,
                                    priority:e.target.value
                                })
                            }
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>

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
                                onClick={raiseTicket}
                                className="bg-blue-600 text-white px-5 py-2 rounded"
                            >
                                Submit
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}
