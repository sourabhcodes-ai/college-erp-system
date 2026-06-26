import Sidebar from "../components/Sidebar";

function StudentAttendance() {

    const attendanceData = [
        {
            subject: "Programming in C",
            type: "THEORY",
            credits: 4,
            faculty: "Dr Sharma",
            conducted: 36,
            present: 32,
            absent: 4,
            percentage: 88.89
        },
        {
            subject: "Programming Lab",
            type: "LAB",
            credits: 2,
            faculty: "Mr Das",
            conducted: 20,
            present: 18,
            absent: 2,
            percentage: 90.00
        },
        {
            subject: "Mathematics",
            type: "THEORY",
            credits: 4,
            faculty: "Dr Roy",
            conducted: 40,
            present: 29,
            absent: 11,
            percentage: 72.50
        },
        {
            subject: "English",
            type: "THEORY",
            credits: 2,
            faculty: "Ms Devi",
            conducted: 32,
            present: 27,
            absent: 5,
            percentage: 84.38
        }
    ];

    const totalCredits =
        attendanceData.reduce(
            (sum, subject) =>
                sum + subject.credits,
            0
        );

    const totalConducted =
        attendanceData.reduce(
            (sum, subject) =>
                sum + subject.conducted,
            0
        );

    const totalPresent =
        attendanceData.reduce(
            (sum, subject) =>
                sum + subject.present,
            0
        );

    const overallAttendance =
        (
            (totalPresent /
                totalConducted) *
            100
        ).toFixed(2);

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-gray-100 min-h-screen">

                <h1 className="text-3xl font-bold mb-6">
                    My Attendance
                </h1>

                <div className="bg-yellow-50 border border-yellow-300 text-red-400 p-4 rounded-lg mb-6">

                    <h2 className="font-bold text-lg mb-2">
                        Note:
                    </h2>

                    <p>
                        Students must maintain
                        a minimum of 75%
                        attendance in each
                        subject to be eligible
                        for semester examinations.
                    </p>

                    <p>
                        Students below 75%
                        attendance may not be
                        eligible for relaxation.
                    </p>

                </div>

                <div className="bg-white rounded-lg shadow overflow-x-auto">

                    <table className="w-full border border-gray-300">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4 text-left border border-gray-300">
                                    #
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Subject
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Type
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Credit
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Faculty
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Conducted
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Present
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    Absent
                                </th>

                                <th className="p-4 text-left border border-gray-300">
                                    %
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                attendanceData.map(
                                    (
                                        subject,
                                        index
                                    ) => (

                                        <tr
                                            key={index}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="p-4 border border-gray-300">
                                                {index + 1}
                                            </td>


                                            <td className="p-4 border border-gray-300">
                                                {subject.subject}
                                            </td>

                                            <td className="p-4 border border-gray-300">
                                                {subject.type}
                                            </td>

                                            <td className="p-4 border border-gray-300">
                                                {subject.credits}
                                            </td>

                                            <td className="p-4 border border-gray-300">
                                                {subject.faculty}
                                            </td>

                                            <td className="p-4 border border-gray-300">
                                                {subject.conducted}
                                            </td>

                                            <td className="p-4 border border-gray-300 text-green-600 font-semibold">
                                                {subject.present}
                                            </td>

                                            <td className="p-4 border border-gray-300 text-red-600 font-semibold">
                                                {subject.absent}
                                            </td>

                                            <td className="p-4 border border-gray-300">

                                                <span
                                                    className={`px-3 py-1 rounded text-white font-bold ${
                                                        subject.percentage >= 75
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }`}
                                                >
                                                    {subject.percentage}%
                                                </span>

                                            </td>

                                        </tr>
                                    )
                                )
                            }

                        </tbody>

                    </table>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                    <div className="bg-white p-4 rounded shadow">
                        <p className="text-gray-500">
                            Total Credits
                        </p>
                        <h2 className="text-2xl font-bold">
                            {totalCredits}
                        </h2>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <p className="text-gray-500">
                            Conducted Classes
                        </p>
                        <h2 className="text-2xl font-bold">
                            {totalConducted}
                        </h2>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <p className="text-gray-500">
                            Present Classes
                        </p>
                        <h2 className="text-2xl font-bold text-green-600">
                            {totalPresent}
                        </h2>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <p className="text-gray-500">
                            Overall Attendance
                        </p>
                        <h2 className="text-2xl font-bold text-blue-600">
                            {overallAttendance}%
                        </h2>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StudentAttendance;