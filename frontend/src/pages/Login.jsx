import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.data.user
                )
            );

            window.location.href = "/dashboard";

            console.log(
                response.data
            );

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    College ERP
                </h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded mb-4"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded mb-4"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;