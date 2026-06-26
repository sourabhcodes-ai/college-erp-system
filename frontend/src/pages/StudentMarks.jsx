import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function StudentMarks() {

    const [marks, setMarks] =
        useState([]);

    const [subjects, setSubjects] =
        useState([]);

    const [semesterId, setSemesterId] =
        useState("BCA1");

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    useEffect(() => {

        fetchData();

    }, [semesterId]);

    const fetchData = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const marksResponse =
                await api.get(
                    `/marks/student/${user.id}`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            const subjectsResponse =
                await api.get(
                    "/subjects"
                );

            const semesterMarks =
                marksResponse.data.filter(
                    mark =>
                        mark.semester_id ===
                        semesterId
                );

            setMarks(
                semesterMarks
            );

            setSubjects(
                subjectsResponse.data
            );

        } catch (error) {

            console.error(error);
        }
    };

    const getSubjectName =
        (subjectId) => {

            const subject =
                subjects.find(
                    s =>
                        s.id === subjectId
                );

            return (
                subject?.name ||
                subjectId
            );
        };

    const calculateTotal =
        (mark) => {

            if (
                mark.subject_type ===
                "THEORY"
            ) {

                const internal1 =
                    (
                        mark.mid_sem_marks /
                        30
                    ) * 15;

                return Math.round(
                    internal1 +
                    mark.internal2_marks +
                    mark.attendance_marks +
                    mark.theory_marks
                );
            }

            return (
                mark.practical_marks +
                mark.viva_marks +
                mark.internal_marks
            );
        };

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-gray-100 min-h-screen">

                <h1 className="text-3xl font-bold mb-6">
                    My Marks
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
                                    key={
                                        index + 1
                                    }
                                    value={`BCA${index + 1}`}
                                >
                                    Semester {
                                        index + 1
                                    }
                                </option>
                            )
                        )
                    }
                </select>

                {
                    marks.map(
                        mark => (

                            <div
                                key={mark.id}
                                className="bg-white rounded-lg shadow p-6 mb-6"
                            >

                                <h2 className="text-xl font-bold mb-4">
                                    {
                                        getSubjectName(
                                            mark.subject_id
                                        )
                                    }
                                </h2>

                                {
                                    mark.subject_type ===
                                    "THEORY" && (
                                        <>
                                            <p>
                                                Mid Sem:
                                                {" "}
                                                {
                                                    mark.mid_sem_marks
                                                }
                                                /30
                                            </p>

                                            <p>
                                                Internal 2:
                                                {" "}
                                                {
                                                    mark.internal2_marks
                                                }
                                                /15
                                            </p>

                                            <p>
                                                Attendance:
                                                {" "}
                                                {
                                                    mark.attendance_marks
                                                }
                                                /10
                                            </p>

                                            <p>
                                                Theory:
                                                {" "}
                                                {
                                                    mark.theory_marks
                                                }
                                                /60
                                            </p>
                                        </>
                                    )
                                }

                                {
                                    mark.subject_type ===
                                    "PRACTICAL" && (
                                        <>
                                            <p>
                                                Practical:
                                                {" "}
                                                {
                                                    mark.practical_marks
                                                }
                                                /60
                                            </p>

                                            <p>
                                                Viva:
                                                {" "}
                                                {
                                                    mark.viva_marks
                                                }
                                                /20
                                            </p>

                                            <p>
                                                Internal:
                                                {" "}
                                                {
                                                    mark.internal_marks
                                                }
                                                /20
                                            </p>
                                        </>
                                    )
                                }

                                <hr className="my-4" />

                                <p className="font-bold text-lg">
                                    Total:
                                    {" "}
                                    {
                                        calculateTotal(
                                            mark
                                        )
                                    }
                                    /100
                                </p>

                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
}

export default StudentMarks;