import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Students() {

    const [students, setStudents] =
        useState([]);

    useEffect(() => {

        fetchStudents();

    }, []);

    const fetchStudents =
        async () => {

            try {

                const response =
                    await api.get(
                        "/students"
                    );

                setStudents(
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
                    Students
                </h1>

                <div className="bg-white rounded-lg shadow p-4">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    ID
                                </th>

                                <th className="p-3 text-left">
                                    Roll No
                                </th>

                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Department
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                students.map(
                                    (
                                        student
                                    ) => (

                                        <tr
                                            key={
                                                student.id
                                            }
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {
                                                    student.id
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    student.roll_no
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    student.name
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    student.department_id
                                                }
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

export default Students;