const pool = require("../config/db");

const { calculateCGPA } = require("../utils/cgpaUtils");
const { calculateSGPA } = require("../utils/sgpaUtils");

const {
    calculateTheoryTotal,
    calculatePracticalTotal,
    calculateGrade
} = require("../utils/resultUtils");

// Get all results
const getResults = async (req, res) => {

    try {

        const marksResult =
            await pool.query(
                "SELECT * FROM marks"
            );

        const marks =
            marksResult.rows;

        const results =
            marks.map((record) => {

                let totalMarks = 0;

                if (
                    record.subject_type ===
                    "THEORY"
                ) {

                    totalMarks =
                        calculateTheoryTotal({

                            midSemMarks:
                                record.mid_sem_marks,

                            internal2Marks:
                                record.internal2_marks,

                            attendanceMarks:
                                record.attendance_marks,

                            theoryMarks:
                                record.theory_marks
                        });
                }

                if (
                    record.subject_type ===
                    "PRACTICAL"
                ) {

                    totalMarks =
                        calculatePracticalTotal({

                            practicalMarks:
                                record.practical_marks,

                            vivaMarks:
                                record.viva_marks,

                            internalMarks:
                                record.internal_marks
                        });
                }

                const grade =
                    calculateGrade(
                        totalMarks
                    );

                return {

                    studentId:
                        record.student_id,

                    subjectId:
                        record.subject_id,

                    subjectType:
                        record.subject_type,

                    totalMarks,

                    grade:
                        grade?.grade ||
                        "N/A",

                    gradePoint:
                        grade?.gradePoint ||
                        0
                };
            });

        res.json(results);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching results"
        });
    }
};

// Student Results
const getResultsByStudent =
async (req, res) => {

    try {

        const studentId =
            req.params.studentId;

        if (
            req.user.role ===
            "STUDENT" &&

            req.user.userId !==
            studentId
        ) {

            return res
                .status(403)
                .json({

                    message:
                        "Access denied. You can only view your own results."
                });
        }

        const result =
            await pool.query(

                `
                SELECT *
                FROM marks
                WHERE student_id = $1
                `,

                [studentId]
            );

        const studentResults =
            result.rows.map(
                (record) => {

                    let totalMarks =
                        0;

                    if (
                        record.subject_type ===
                        "THEORY"
                    ) {

                        totalMarks =
                            calculateTheoryTotal({

                                midSemMarks:
                                    record.mid_sem_marks,

                                internal2Marks:
                                    record.internal2_marks,

                                attendanceMarks:
                                    record.attendance_marks,

                                theoryMarks:
                                    record.theory_marks
                            });
                    }

                    if (
                        record.subject_type ===
                        "PRACTICAL"
                    ) {

                        totalMarks =
                            calculatePracticalTotal({

                                practicalMarks:
                                    record.practical_marks,

                                vivaMarks:
                                    record.viva_marks,

                                internalMarks:
                                    record.internal_marks
                            });
                    }

                    const grade =
                        calculateGrade(
                            totalMarks
                        );

                    return {

                        studentId:
                            record.student_id,

                        subjectId:
                            record.subject_id,

                        subjectType:
                            record.subject_type,

                        totalMarks,

                        grade:
                            grade?.grade ||
                            "N/A",

                        gradePoint:
                            grade?.gradePoint ||
                            0
                    };
                });

        res.json(
            studentResults
        );

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching student results"
        });
    }
};

// Semester Result
const getSemesterResult =
async (req, res) => {

    try {

        const {
            studentId,
            semesterId
        } = req.params;

        const marksResult =
            await pool.query(

                `
                SELECT *
                FROM marks
                WHERE student_id=$1
                AND semester_id=$2
                `,

                [
                    studentId,
                    semesterId
                ]
            );

        const subjectsResult =
            await pool.query(
                "SELECT * FROM subjects"
            );

        const subjects =
            subjectsResult.rows;

        const results =
            marksResult.rows.map(
                (record) => {

                    const subject =
                        subjects.find(
                            s =>
                                s.id ===
                                record.subject_id
                        );

                    let totalMarks =
                        0;

                    let internalMarks =
                        0;

                    if (
                        record.subject_type ===
                        "THEORY"
                    ) {

                        internalMarks =
                            (
                                record.mid_sem_marks /
                                30
                            ) *
                            15 +

                            record.internal2_marks +

                            record.attendance_marks;

                        totalMarks =
                            internalMarks +

                            record.theory_marks;
                    }

                    if (
                        record.subject_type ===
                        "PRACTICAL"
                    ) {

                        internalMarks =
                            record.internal_marks;

                        totalMarks =
                            record.practical_marks +

                            record.viva_marks +

                            record.internal_marks;
                    }

                    const grade =
                        calculateGrade(
                            totalMarks
                        );

                    return {

                        subjectCode:
                            subject?.id,

                        subjectName:
                            subject?.name,

                        credits:
                            subject?.credits,

                        subjectType:
                            record.subject_type,

                        internalMarks,

                        totalMarks,

                        grade:
                            grade?.grade,

                        gradePoint:
                            grade?.gradePoint
                    };
                });

        const sgpa =
            calculateSGPA(
                results
            );

        const totalCredits =
            results.reduce(
                (
                    sum,
                    s
                ) =>
                    sum +
                    s.credits,
                0
            );

        res.json({

            studentId,

            semesterId,

            totalCredits,

            sgpa,

            resultStatus:

                results.some(
                    s =>
                        s.grade ===
                        "F"
                )

                    ? "FAIL"

                    : "PASS",

            subjects:
                results
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching semester result"
        });
    }
};

// CGPA
const getCGPA =
async (req, res) => {

    try {

        const studentId =
            req.params.studentId;

        const result =
            await pool.query(

                `
                SELECT *
                FROM semester_results
                WHERE student_id = $1
                ORDER BY semester_id
                `,

                [studentId]
            );

        const semesters =
            result.rows.map(
                s => ({

                    totalCredits:
                        s.total_credits,

                    totalCreditPoints:
                        s.total_credit_points
                })
            );

        const cgpa =
            calculateCGPA(
                semesters
            );

        res.json({

            studentId,

            completedSemesters:
                result.rows.length,

            cgpa,

            semesters:
                result.rows.map(
                    s => ({

                        semesterId:
                            s.semester_id,

                        sgpa:
                            s.sgpa
                    })
                )
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching CGPA"
        });
    }
};

module.exports = {
    getResults,
    getResultsByStudent,
    getSemesterResult,
    getCGPA
};