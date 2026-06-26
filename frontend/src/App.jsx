import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Subjects from "./pages/Subjects";
import Marks from "./pages/Marks";
import StudentResult from "./pages/StudentResult";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import StudentResults from "./pages/StudentResults";
import StudentCGPA from "./pages/StudentCGPA";
import StudentMarks from "./pages/StudentMarks";
import StudentAttendance from "./pages/StudentAttendance";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* ADMIN ONLY */}

                <Route
                    path="/students"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["ADMIN"]}
                            >
                                <Students />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/faculty"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["ADMIN"]}
                            >
                                <Faculty />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/subjects"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["ADMIN"]}
                            >
                                <Subjects />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                {/* ADMIN + FACULTY */}

                <Route
                    path="/attendance"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "FACULTY"
                                ]}
                            >
                                <Attendance />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/marks"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "FACULTY"
                                ]}
                            >
                                <Marks />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/marks/:studentId"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "FACULTY"
                                ]}
                            >
                                <StudentResult />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/results"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "FACULTY"
                                ]}
                            >
                                <Results />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/results"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["STUDENT"]}
                            >
                                <StudentResults />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/cgpa"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["STUDENT"]}
                            >
                                <StudentCGPA />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/marks"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["STUDENT"]}
                            >
                                <StudentMarks />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/attendance"
                    element={
                        <ProtectedRoute>
                            <RoleProtectedRoute
                                allowedRoles={["STUDENT"]}
                            >
                                <StudentAttendance />
                            </RoleProtectedRoute>
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;