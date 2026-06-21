const semesterResults = require("../data/semesterResults");
const { calculateCGPA } = require("../utils/cgpaUtils");
const { calculateSGPA } = require("../utils/sgpaUtils");
const marks = require("../data/marks");
const subjects = require("../data/subjects");

const {
    calculateTheoryTotal,
    calculatePracticalTotal,
    calculateGrade
} = require("../utils/resultUtils");

// Get all results
const getResults = (req, res) => {

    const results = marks.map((record) => {

        let totalMarks = 0;

        if (record.subjectType === "THEORY") {
            totalMarks = calculateTheoryTotal(record);
        }

        if (record.subjectType === "PRACTICAL") {
            totalMarks = calculatePracticalTotal(record);
        }

        const grade = calculateGrade(totalMarks);

        return {
            studentId: record.studentId,
            subjectId: record.subjectId,
            subjectType: record.subjectType,

            totalMarks,

            grade: grade?.grade || "N/A",

            gradePoint: grade?.gradePoint || 0
        };
    });

    res.json(results);
};

// Get results for a specific student
const getResultsByStudent = (req, res) => {

    const studentId = req.params.studentId;

    const studentResults = marks
        .filter(
            (record) =>
                record.studentId === studentId
        )
        .map((record) => {

            let totalMarks = 0;

            if (record.subjectType === "THEORY") {
                totalMarks =
                    calculateTheoryTotal(record);
            }

            if (record.subjectType === "PRACTICAL") {
                totalMarks =
                    calculatePracticalTotal(record);
            }

            const grade =
                calculateGrade(totalMarks);

            return {
                studentId: record.studentId,

                subjectId: record.subjectId,

                subjectType: record.subjectType,

                totalMarks,

                grade: grade?.grade || "N/A",

                gradePoint:
                    grade?.gradePoint || 0
            };
        });

    res.json(studentResults);
};

// Get semester result sheet
const getSemesterResult = (req, res) => {

    const { studentId, semesterId } = req.params;

    const semesterResults = marks
        .filter(
            (record) =>
                record.studentId === studentId &&
                record.semesterId === semesterId
        )
        .map((record) => {

            const subject = subjects.find(
                (s) => s.id === record.subjectId
            );

            let totalMarks = 0;
            let internalMarks = 0;

            if (record.subjectType === "THEORY") {

                const internal1 =
                    (record.midSemMarks / 30) * 15;

                internalMarks =
                    internal1 +
                    record.internal2Marks +
                    record.attendanceMarks;

                totalMarks =
                    internalMarks +
                    record.theoryMarks;
            }

            if (record.subjectType === "PRACTICAL") {

                internalMarks =
                    record.internalMarks;

                totalMarks =
                    record.practicalMarks +
                    record.vivaMarks +
                    record.internalMarks;
            }

            const grade =
                calculateGrade(totalMarks);

            return {
                subjectCode:
                    subject?.id || "N/A",

                subjectName:
                    subject?.name ||
                    "Unknown Subject",

                credits:
                    subject?.credits || 0,

                subjectType:
                    record.subjectType,

                internalMarks,

                totalMarks,

                grade:
                    grade?.grade || "N/A",

                gradePoint:
                    grade?.gradePoint || 0
            };
        });

    const sgpa =
        calculateSGPA(semesterResults);

    const totalCredits =
        semesterResults.reduce(
            (sum, subject) =>
                sum + subject.credits,
            0
        );

    const hasBacklog =
        semesterResults.some(
            (subject) =>
                subject.grade === "F"
        );

    res.json({
        studentId,
        semesterId,

        totalCredits,

        sgpa,

        resultStatus:
            hasBacklog
                ? "FAIL"
                : "PASS",

        subjects:
            semesterResults
    });
};

const getCGPA = (req, res) => {

    const studentId = req.params.studentId;

    const studentSemesters =
        semesterResults.filter(
            (semester) =>
                semester.studentId === studentId
        );

    const cgpa =
        calculateCGPA(studentSemesters);

    res.json({
        studentId,

        completedSemesters:
            studentSemesters.length,

        cgpa
    });
};

module.exports = {
    getResults,
    getResultsByStudent,
    getSemesterResult,
    getCGPA
};