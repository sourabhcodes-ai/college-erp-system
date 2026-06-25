import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Marks() {

    const [students, setStudents] =
        useState([]);

    useEffect(() => {

        fetchMarks();

    }, []);

    const fetchMarks = async () => {

        try {

            const response =
                await api.get("/marks");

            const uniqueStudents =
                [...new Set(
                    response.data.map(
                        mark => mark.student_id
                    )
                )];

            setStudents(
                uniqueStudents
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
                    Student Results
                </h1>

                <div className="bg-white rounded-lg shadow p-4">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    Student ID
                                </th>

                                <th className="p-3 text-left">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                students.map(
                                    (studentId) => (

                                        <tr
                                            key={studentId}
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {studentId}
                                            </td>

                                            <td className="p-3">

                                                <Link
                                                    to={`/marks/${studentId}`}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                                >
                                                    View Result
                                                </Link>

                                            </td>

                                        </tr>
                                    )
                                )
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Marks;