import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Attendance() {

    const [attendance, setAttendance] =
        useState([]);

    useEffect(() => {

        fetchAttendance();

    }, []);

    const fetchAttendance = async () => {

        try {

            const response =
                await api.get(
                    "/attendance"
                );

            setAttendance(
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
                    Attendance
                </h1>

                <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    Student
                                </th>

                                <th className="p-3 text-left">
                                    Section
                                </th>

                                <th className="p-3 text-left">
                                    Subject
                                </th>

                                <th className="p-3 text-left">
                                    Faculty
                                </th>

                                <th className="p-3 text-left">
                                    Date
                                </th>

                                <th className="p-3 text-left">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                attendance.map(
                                    (record) => (

                                        <tr
                                            key={record.id}
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {record.student_id}
                                            </td>

                                            <td className="p-3">
                                                {record.section_id}
                                            </td>

                                            <td className="p-3">
                                                {record.subject_id}
                                            </td>

                                            <td className="p-3">
                                                {record.faculty_id}
                                            </td>

                                            <td className="p-3">
                                                {
                                                    new Date(
                                                        record.attendance_date
                                                    ).toLocaleDateString()
                                                }
                                            </td>

                                            <td
                                                className={`p-3 font-semibold ${
                                                    record.status === "Present"
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                {record.status}
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

export default Attendance;