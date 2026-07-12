import { useEffect, useState } from "react";
import { employeeAPI } from "../lib/axios";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export default function Employees() {

    const emptyEmployee = {
        name: "",
        email: "",
        phone: "",
        department: ""
    };

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [employee, setEmployee] = useState(emptyEmployee);

    const loadEmployees = async () => {
        try {
            const res = await employeeAPI.getAll();
            setEmployees(res.data);
        } catch {
            toast.error("Unable to load employees");
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    const saveEmployee = async () => {
        try {

            if (editing) {
                await employeeAPI.update(employee.id, employee);
                toast.success("Employee Updated");
            } else {
                await employeeAPI.create(employee);
                toast.success("Employee Added");
            }

            setEmployee(emptyEmployee);
            setEditing(false);
            setShowModal(false);
            loadEmployees();

        } catch {
            toast.error("Operation Failed");
        }
    };

    const editEmployee = (item) => {
        setEmployee(item);
        setEditing(true);
        setShowModal(true);
    };

    const deleteEmployee = async (id) => {

        if (!window.confirm("Delete Employee?")) return;

        try {

            await employeeAPI.delete(id);

            toast.success("Employee Deleted");

            loadEmployees();

        } catch {

            toast.error("Delete Failed");

        }

    };

    const filtered = employees.filter((emp) =>
        Object.values(emp)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Employees
                </h1>

                <button
                    onClick={() => {
                        setEditing(false);
                        setEmployee(emptyEmployee);
                        setShowModal(true);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex gap-2 items-center"
                >
                    <Plus size={18}/>
                    Add Employee
                </button>

            </div>

            <div className="relative">

                <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                />

                <input
                    className="border rounded-lg w-full pl-10 p-3"
                    placeholder="Search Employee..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>

            <div className="bg-white rounded-xl shadow overflow-auto">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filtered.map((emp)=>(

                            <tr
                                key={emp.id}
                                className="border-b hover:bg-slate-50"
                            >

                                <td className="p-3">
                                    {emp.name}
                                </td>

                                <td>{emp.email}</td>

                                <td>{emp.phone}</td>

                                <td>{emp.department}</td>

                                <td>

                                    <div className="flex gap-3">

                                        <button
                                            className="text-blue-600"
                                            onClick={()=>editEmployee(emp)}
                                        >
                                            <Pencil size={18}/>
                                        </button>

                                        <button
                                            className="text-red-600"
                                            onClick={()=>deleteEmployee(emp.id)}
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

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                    <div className="bg-white rounded-xl p-6 w-[500px] space-y-4">

                        <h2 className="text-2xl font-bold">

                            {editing ? "Edit Employee" : "Add Employee"}

                        </h2>

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Name"
                            value={employee.name}
                            onChange={(e)=>setEmployee({...employee,name:e.target.value})}
                        />

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Email"
                            value={employee.email}
                            onChange={(e)=>setEmployee({...employee,email:e.target.value})}
                        />

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Phone"
                            value={employee.phone}
                            onChange={(e)=>setEmployee({...employee,phone:e.target.value})}
                        />

                        <input
                            className="border p-3 rounded-lg w-full"
                            placeholder="Department"
                            value={employee.department}
                            onChange={(e)=>setEmployee({...employee,department:e.target.value})}
                        />

                        <div className="flex justify-end gap-3">

                            <button
                                onClick={()=>setShowModal(false)}
                                className="px-5 py-2 rounded bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={saveEmployee}
                                className="px-5 py-2 rounded bg-blue-600 text-white"
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
