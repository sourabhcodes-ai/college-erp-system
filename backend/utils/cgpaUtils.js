const calculateCGPA = (semesterResults) => {

    let totalCredits = 0;
    let totalCreditPoints = 0;

    semesterResults.forEach((semester) => {

        totalCredits +=
            semester.totalCredits;

        totalCreditPoints +=
            semester.totalCreditPoints;
    });

    if (totalCredits === 0) {
        return 0;
    }

    return (
        totalCreditPoints /
        totalCredits
    ).toFixed(2);
};

module.exports = {
    calculateCGPA
};