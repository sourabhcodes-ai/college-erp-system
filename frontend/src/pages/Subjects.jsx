import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Subjects() {

    const [subjects, setSubjects] =
        useState([]);

    useEffect(() => {

        fetchSubjects();

    }, []);

    const fetchSubjects =
        async () => {

            try {

                const response =
                    await api.get(
                        "/subjects"
                    );

                setSubjects(
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
                    Subjects
                </h1>

                <div className="bg-white rounded-lg shadow p-4">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    Subject ID
                                </th>

                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Department
                                </th>

                                <th className="p-3 text-left">
                                    Semester
                                </th>

                                <th className="p-3 text-left">
                                    Type
                                </th>

                                <th className="p-3 text-left">
                                    Credits
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                subjects.map(
                                    (subject) => (

                                        <tr
                                            key={
                                                subject.id
                                            }
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {subject.id}
                                            </td>

                                            <td className="p-3">
                                                {subject.name}
                                            </td>

                                            <td className="p-3">
                                                {subject.department_id}
                                            </td>

                                            <td className="p-3">
                                                {subject.semester_id}
                                            </td>

                                            <td className="p-3">
                                                {subject.subject_type}
                                            </td>

                                            <td className="p-3">
                                                {subject.credits}
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

export default Subjects;