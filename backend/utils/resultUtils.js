const resultStructure = require("../data/resultStructure");

const calculateTheoryTotal = (markRecord) => {
    const internal1 =
        (markRecord.midSemMarks / 30) * 15;

    const totalInternal =
        internal1 +
        markRecord.internal2Marks +
        markRecord.attendanceMarks;

    return totalInternal + markRecord.theoryMarks;
};

const calculatePracticalTotal = (markRecord) => {
    return (
        markRecord.practicalMarks +
        markRecord.vivaMarks +
        markRecord.internalMarks
    );
};

const calculateGrade = (totalMarks) => {
    const grade = resultStructure.gradeSystem.find(
        (g) =>
            totalMarks >= g.minMarks &&
            totalMarks <= g.maxMarks
    );

    return grade || null;
};

module.exports = {
    calculateTheoryTotal,
    calculatePracticalTotal,
    calculateGrade
};