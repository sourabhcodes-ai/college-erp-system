import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function StudentResult() {

    const { studentId } = useParams();

    const [marks, setMarks] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const marksResponse =
                await api.get(
                    `/marks/student/${studentId}`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            const subjectsResponse =
                await api.get("/subjects");

            setMarks(
                marksResponse.data
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
                    (s) =>
                        s.id === subjectId
                );

            return (
                subject?.name ||
                subjectId
            );
        };

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-gray-100 min-h-screen">

                <div className="bg-white p-8 rounded-lg shadow">

                    <h1 className="text-3xl font-bold mb-6">
                        Student Result Card
                    </h1>

                    {
                        marks.map(
                            (mark) => {

                                let total = 0;

                                if (
                                    mark.subject_type ===
                                    "THEORY"
                                ) {

                                    total =
                                        ((mark.mid_sem_marks || 0) / 30) * 15 +
                                        (mark.internal2_marks || 0) +
                                        (mark.attendance_marks || 0) +
                                        (mark.theory_marks || 0);
                                }

                                if (
                                    mark.subject_type ===
                                    "PRACTICAL"
                                ) {

                                    total =
                                        (mark.practical_marks || 0) +
                                        (mark.viva_marks || 0) +
                                        (mark.internal_marks || 0);
                                }

                                return (

                                    <div
                                        key={mark.id}
                                        className="border rounded p-5 mb-5"
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
                                                    <p>Mid Sem : {mark.mid_sem_marks}</p>
                                                    <p>Internal 2 : {mark.internal2_marks}</p>
                                                    <p>Attendance : {mark.attendance_marks}</p>
                                                    <p>Theory : {mark.theory_marks}</p>
                                                </>
                                            )
                                        }

                                        {
                                            mark.subject_type ===
                                            "PRACTICAL" && (
                                                <>
                                                    <p>Practical : {mark.practical_marks}</p>
                                                    <p>Viva : {mark.viva_marks}</p>
                                                    <p>Internal : {mark.internal_marks}</p>
                                                </>
                                            )
                                        }

                                        <p className="mt-4 font-bold">
                                            Total : {Math.round(total)}
                                        </p>

                                    </div>
                                );
                            }
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default StudentResult;