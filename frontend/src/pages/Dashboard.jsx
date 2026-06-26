import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Dashboard() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        if (
            user?.role ===
            "ADMIN"
        ) {

            fetchAdminStats();
        }

    }, []);

    const fetchAdminStats =
        async () => {

            try {

                const token =
                    localStorage.getItem(
                        "token"
                    );

                const response =
                    await api.get(
                        "/dashboard/admin",
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                setStats(
                    response.data
                );

            } catch (error) {

                console.error(error);
            }
        };

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-gray-100 min-h-screen">

                <h1 className="text-3xl font-bold mb-6">
                    Dashboard
                </h1>

                <div className="bg-white p-6 rounded-lg shadow mb-6">

                    <h2 className="text-xl font-semibold">
                        Welcome {user?.id}
                    </h2>

                    <p className="mt-2">
                        Role: {user?.role}
                    </p>

                </div>

                {
                    user?.role ===
                    "ADMIN" &&

                    stats && (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Students
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.students}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Faculty
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.faculty}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Departments
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.departments}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Subjects
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.subjects}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Attendance
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.attendance}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Marks
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.marks}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Results
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    {stats.results}
                                </p>
                            </div>

                        </div>
                    )
                }

                {
                    user?.role ===
                    "FACULTY" && (

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Assigned Subjects
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    3
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Attendance Entries
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    120
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Marks Entered
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    85
                                </p>
                            </div>

                        </div>
                    )
                }

                {
                    user?.role ===
                    "STUDENT" && (

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Current SGPA
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    9.00
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Current CGPA
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    8.71
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Attendance
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    88.89%
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-gray-500">
                                    Pending Fees
                                </h2>

                                <p className="text-4xl font-bold mt-2">
                                    ₹0
                                </p>
                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default Dashboard;