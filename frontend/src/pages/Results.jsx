import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Results() {

    const [results, setResults] =
        useState([]);

    useEffect(() => {

        fetchResults();

    }, []);

    const fetchResults = async () => {

        try {

            const response =
                await api.get(
                    "/results"
                );

            setResults(
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
                    Results
                </h1>

                <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    Student
                                </th>

                                <th className="p-3 text-left">
                                    Subject
                                </th>

                                <th className="p-3 text-left">
                                    Type
                                </th>

                                <th className="p-3 text-left">
                                    Total Marks
                                </th>

                                <th className="p-3 text-left">
                                    Grade
                                </th>

                                <th className="p-3 text-left">
                                    Grade Point
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                results.map(
                                    (
                                        result,
                                        index
                                    ) => (

                                        <tr
                                            key={index}
                                            className="border-b"
                                        >

                                            <td className="p-3">
                                                {result.studentId}
                                            </td>

                                            <td className="p-3">
                                                {result.subjectId}
                                            </td>

                                            <td className="p-3">
                                                {result.subjectType}
                                            </td>

                                            <td className="p-3">
                                                {result.totalMarks}
                                            </td>

                                            <td className="p-3 font-bold text-green-600">
                                                {result.grade}
                                            </td>

                                            <td className="p-3">
                                                {result.gradePoint}
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

export default Results;