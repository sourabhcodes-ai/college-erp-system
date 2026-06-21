const resultStructure = {
    theorySubject: {
        midSem: {
            maxMarks: 30,
            convertedTo: 15
        },

        internal2: {
            name: "Presentation / Assignment / Project",
            maxMarks: 15
        },

        internal3: {
            name: "Attendance / Behaviour / Performance",
            maxMarks: 10
        },

        finalTheory: {
            maxMarks: 60
        },

        totalInternal: 40,
        totalMarks: 100
    },

    practicalSubject: {
        practical: {
            maxMarks: 60
        },

        viva: {
            maxMarks: 20
        },

        internal: {
            maxMarks: 20
        },

        totalMarks: 100
    },

    gradeSystem: [
        {
            grade: "O",
            minMarks: 90,
            maxMarks: 100,
            gradePoint: 10
        },
        {
            grade: "A+",
            minMarks: 80,
            maxMarks: 89,
            gradePoint: 9
        },
        {
            grade: "A",
            minMarks: 70,
            maxMarks: 79,
            gradePoint: 8
        },
        {
            grade: "B+",
            minMarks: 60,
            maxMarks: 69,
            gradePoint: 7
        },
        {
            grade: "B",
            minMarks: 50,
            maxMarks: 59,
            gradePoint: 6
        },
        {
            grade: "C",
            minMarks: 40,
            maxMarks: 49,
            gradePoint: 5
        },
        {
            grade: "F",
            minMarks: 0,
            maxMarks: 39,
            gradePoint: 0
        }
    ]
};

module.exports = resultStructure;