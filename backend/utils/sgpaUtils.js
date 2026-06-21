const calculateSGPA = (results) => {

    let totalCreditPoints = 0;
    let totalCredits = 0;

    results.forEach((subject) => {

        totalCreditPoints +=
            subject.gradePoint *
            subject.credits;

        totalCredits +=
            subject.credits;
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
    calculateSGPA
};