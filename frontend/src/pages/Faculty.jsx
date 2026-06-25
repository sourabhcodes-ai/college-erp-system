import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Faculty() {

    const [faculty, setFaculty] =
        useState([]);

    useEffect(() => {

        fetchFaculty();

    }, []);

    const fetchFaculty =
        async () => {

            try {

                const response =
                    await api.get(
                        "/faculty"
                    );

                setFaculty(
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
                    Faculty
                </h1>

                <div className="bg-white rounded-lg shadow p-4">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    ID
                                </th>

                                <th className="p-3 text-left">
                                    Employee ID
                                </th>

                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Department
                                </th>

                                <th className="p-3 text-left">
                                    Designation
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                faculty.map(
                                    (teacher) => (

                                        <tr
                                            key={
                                                teacher.id
                                            }
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {
                                                    teacher.id
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    teacher.employee_id
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    teacher.name
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    teacher.department_id
                                                }
                                            </td>

                                            <td className="p-3">
                                                {
                                                    teacher.designation
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

export default Faculty;