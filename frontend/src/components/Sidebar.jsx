import { Link } from "react-router-dom";

function Sidebar() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const role =
        user?.role;

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";
    };

    return (

        <div className="w-64 bg-blue-700 text-white min-h-screen p-5">

            <h1 className="text-2xl font-bold mb-8">
                College ERP
            </h1>

            <p className="mb-6 text-sm">
                {role}
            </p>

            <nav className="flex flex-col gap-4">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                {role === "ADMIN" && (
                    <>
                        <Link to="/students">
                            Students
                        </Link>

                        <Link to="/faculty">
                            Faculty
                        </Link>

                        <Link to="/subjects">
                            Subjects
                        </Link>

                        <Link to="/attendance">
                            Attendance
                        </Link>

                        <Link to="/marks">
                            Marks
                        </Link>

                        <Link to="/results">
                            Results
                        </Link>
                    </>
                )}

                {role === "FACULTY" && (
                    <>
                        <Link to="/attendance">
                            Attendance
                        </Link>

                        <Link to="/marks">
                            Marks
                        </Link>

                        <Link to="/results">
                            Results
                        </Link>
                    </>
                )}

                {role === "STUDENT" && (
                    <>
                        <Link to="/student/attendance">
                            My Attendance
                        </Link>

                        <Link to="/student/marks">
                            My Marks
                        </Link>

                        <Link to="/student/results">
                            Semester Results
                        </Link>

                        <Link to="/student/cgpa">
                            My CGPA
                        </Link>
                    </>
                )}

                <button
                    onClick={logout}
                    className="text-left mt-8"
                >
                    Logout
                </button>

            </nav>

        </div>
    );
}

export default Sidebar;