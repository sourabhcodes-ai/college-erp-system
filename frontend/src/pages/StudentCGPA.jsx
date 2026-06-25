import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function StudentCGPA() {

    const [cgpaData, setCgpaData] =
        useState(null);

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    useEffect(() => {

        fetchCGPA();

    }, []);

    const fetchCGPA =
        async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const response =
                    await api.get(
                        `/results/student/${user.id}/cgpa`,
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                setCgpaData(
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
                    My CGPA
                </h1>

                {
                    cgpaData && (

                        <div className="bg-white p-6 rounded shadow">

                            <h2 className="text-xl font-bold mb-4">
                                Semester-wise Performance
                            </h2>

                            <table className="w-full">

                                <thead>

                                    <tr className="border-b">

                                        <th className="text-left p-3">
                                            Semester
                                        </th>

                                        <th className="text-left p-3">
                                            SGPA
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        cgpaData.semesters.map(
                                            (
                                                semester
                                            ) => (

                                                <tr
                                                    key={
                                                        semester.semesterId
                                                    }
                                                    className="border-b"
                                                >

                                                    <td className="p-3">
                                                        {
                                                            semester.semesterId
                                                        }
                                                    </td>

                                                    <td className="p-3">
                                                        {
                                                            semester.sgpa
                                                        }
                                                    </td>

                                                </tr>
                                            )
                                        )
                                    }

                                </tbody>

                            </table>

                            <div className="mt-6 space-y-2">

                                <p>

                                    <strong>
                                        Completed Semesters:
                                    </strong>{" "}

                                    {
                                        cgpaData.completedSemesters
                                    }

                                </p>

                                <p className="text-2xl font-bold text-green-600">

                                    CGPA: {
                                        cgpaData.cgpa
                                    }

                                </p>

                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default StudentCGPA;