import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function StudentResults() {

    const [result, setResult] =
        useState(null);

    const [semesterId, setSemesterId] =
        useState("BCA1");

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    useEffect(() => {

        fetchResult();

    }, [semesterId]);

    const fetchResult =
        async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const response =
                    await api.get(
                        `/results/student/${user.id}/semester/${semesterId}`,
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                setResult(
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
                    Semester Results
                </h1>

                <select
                    value={semesterId}
                    onChange={(e) =>
                        setSemesterId(
                            e.target.value
                        )
                    }
                    className="border p-2 rounded mb-6"
                >
                    {
                        Array.from(
                            { length: 8 },
                            (_, index) => (
                                <option
                                    key={index + 1}
                                    value={`BCA${index + 1}`}
                                >
                                    Semester {index + 1}
                                </option>
                            )
                        )
                    }
                </select>

                {
                    result && (
                        <div className="bg-white p-6 rounded shadow">

                            <h2 className="text-xl font-bold mb-4">
                                Result Sheet
                            </h2>

                            <table className="w-full">

                                <thead>

                                    <tr className="border-b">

                                        <th className="text-left p-3">
                                            Subject
                                        </th>

                                        <th className="text-left p-3">
                                            Credits
                                        </th>

                                        <th className="text-left p-3">
                                            Marks
                                        </th>

                                        <th className="text-left p-3">
                                            Grade
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        result.subjects.map(
                                            (subject) => (

                                                <tr
                                                    key={
                                                        subject.subjectCode
                                                    }
                                                    className="border-b"
                                                >

                                                    <td className="p-3">
                                                        {
                                                            subject.subjectName
                                                        }
                                                    </td>

                                                    <td className="p-3">
                                                        {
                                                            subject.credits
                                                        }
                                                    </td>

                                                    <td className="p-3">
                                                        {
                                                            subject.totalMarks
                                                        }
                                                    </td>

                                                    <td className="p-3 font-bold">
                                                        {
                                                            subject.grade
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
                                        Total Credits:
                                    </strong>{" "}
                                    {
                                        result.totalCredits
                                    }
                                </p>

                                <p>
                                    <strong>
                                        SGPA:
                                    </strong>{" "}
                                    {
                                        result.sgpa
                                    }
                                </p>

                                <p>
                                    <strong>
                                        Result Status:
                                    </strong>{" "}
                                    {
                                        result.resultStatus
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

export default StudentResults;