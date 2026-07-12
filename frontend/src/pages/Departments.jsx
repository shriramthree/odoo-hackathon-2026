import { useEffect, useState } from "react";
import { departmentAPI } from "../lib/axios";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export default function Departments() {

    const emptyDepartment = {
        name: "",
        description: ""
    };

    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState(emptyDepartment);
    const [editing, setEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");

    const loadDepartments = async () => {

        try {

            const res = await departmentAPI.getAll();

            setDepartments(res.data);

        } catch {

            toast.error("Unable to load departments");

        }

    };

    useEffect(() => {

        loadDepartments();

    }, []);

    const saveDepartment = async () => {

        try {

            if (editing) {

                await departmentAPI.update(
                    department.id,
                    department
                );

                toast.success("Department Updated");

            } else {

                await departmentAPI.create(
                    department
                );

                toast.success("Department Added");

            }

            setDepartment(emptyDepartment);

            setEditing(false);

            setShowModal(false);

            loadDepartments();

        } catch {

            toast.error("Operation Failed");

        }

    };

    const editDepartment = (item) => {

        setDepartment(item);

        setEditing(true);

        setShowModal(true);

    };

    const deleteDepartment = async (id) => {

        if (!window.confirm("Delete Department?"))
            return;

        try {

            await departmentAPI.delete(id);

            toast.success("Department Deleted");

            loadDepartments();

        } catch {

            toast.error("Delete Failed");

        }

    };

    const filtered = departments.filter((dept) =>
        Object.values(dept)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Departments
                </h1>

                <button
                    onClick={() => {

                        setDepartment(emptyDepartment);

                        setEditing(false);

                        setShowModal(true);

                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                >

                    <Plus size={18}/>

                    Add Department

                </button>

            </div>

            <div className="relative">

                <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                />

                <input
                    className="border rounded-lg pl-10 p-3 w-full"
                    placeholder="Search Department..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>

            <div className="bg-white rounded-xl shadow overflow-auto">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Department
                            </th>

                            <th>
                                Description
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filtered.map((dept)=>(

                            <tr
                                key={dept.id}
                                className="border-b hover:bg-slate-50"
                            >

                                <td className="p-3">

                                    {dept.name}

                                </td>

                                <td>

                                    {dept.description}

                                </td>

                                <td>

                                    <div className="flex gap-3">

                                        <button
                                            className="text-blue-600"
                                            onClick={()=>
                                                editDepartment(dept)
                                            }
                                        >

                                            <Pencil size={18}/>

                                        </button>

                                        <button
                                            className="text-red-600"
                                            onClick={()=>
                                                deleteDepartment(dept.id)
                                            }
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

            {showModal && (

                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

                    <div className="bg-white rounded-xl p-6 w-[450px] space-y-4">

                        <h2 className="text-2xl font-bold">

                            {editing
                                ? "Edit Department"
                                : "Add Department"}

                        </h2>

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Department Name"
                            value={department.name}
                            onChange={(e)=>
                                setDepartment({
                                    ...department,
                                    name:e.target.value
                                })
                            }
                        />

                        <textarea
                            rows="4"
                            className="border p-3 rounded-lg w-full"
                            placeholder="Description"
                            value={department.description}
                            onChange={(e)=>
                                setDepartment({
                                    ...department,
                                    description:e.target.value
                                })
                            }
                        />

                        <div className="flex justify-end gap-3">

                            <button
                                className="px-5 py-2 bg-gray-300 rounded"
                                onClick={()=>
                                    setShowModal(false)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                className="px-5 py-2 bg-blue-600 text-white rounded"
                                onClick={saveDepartment}
                            >
                                Save
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}
