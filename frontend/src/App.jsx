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

import ProtectedRoute from "./components/ProtectedRoute";

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

                <Route
                    path="/students"
                    element={
                        <ProtectedRoute>
                            <Students />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/faculty"
                    element={
                        <ProtectedRoute>
                            <Faculty />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/subjects"
                    element={
                        <ProtectedRoute>
                            <Subjects />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/marks"
                    element={
                        <ProtectedRoute>
                            <Marks />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/marks/:studentId"
                    element={
                        <ProtectedRoute>
                            <StudentResult />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/attendance"
                    element={
                        <ProtectedRoute>
                            <Attendance />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/results"
                    element={
                        <ProtectedRoute>
                            <Results />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;